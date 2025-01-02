from flask import Blueprint, request, jsonify
from .models import User, Workshop, db
import asyncio
from ollama import AsyncClient

main = Blueprint('main', __name__)

@main.route('/api/assess', methods=['GET'])
def assess():
    # Placeholder code for handling assessment data and returning recommendations
    data = request.get_json()
    return jsonify({"message": "Assessment received"})


# Endpoint for adding a user - these are added just for testing the database connection
@main.route('/signup', methods=['POST'])
def add_user():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400

    # Check if username or email already exists
    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({"message": "Username already exists"}), 400

    existing_email = User.query.filter_by(email=email).first()
    if existing_email:
        return jsonify({"message": "Email already exists"}), 400

    # Create new user
    new_user = User(
        username=username, 
        email=email, 
        password=password, 
        completed_workshops=[], 
        recommended_workshops=[]
    )
    
    # Add user to session and commit to database
    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "message": "User added successfully",
        "user": {
            "id": new_user.id,
            "username": new_user.username,
            "email": new_user.email,
            "completed_workshops": new_user.completed_workshops,
            "recommended_workshops": new_user.recommended_workshops
        }
    }), 201


# endpoint for adding a completed workshop
@main.route('/api/add-completed-workshops', methods=['POST'])
def add_completed_workshops():
    data = request.json
    # user_id = data.get('user_id')
    user_id = 1
    completed_workshops = data.get('completedWorkshops')

    if not user_id or not completed_workshops:
        return jsonify({"message": "Missing required fields"}), 400

    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "User not found"}), 404
    
    if user.completed_workshops:
        user.completed_workshops.extend([workshop for workshop in completed_workshops if workshop not in user.completed_workshops])
    else:
        user.completed_workshops = completed_workshops
    db.session.commit()

    return jsonify({
        "message": "Completed workshops added successfully",
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "completed_workshops": user.completed_workshops,
            "recommended_workshops": user.recommended_workshops
        }
    }), 201

# Route for future implementation of adding recommended workshops
"""
@main.route('/api/add-recommended-workshops', methods=['POST'])
def add_recommended_workshops():
    data = request.json
    # user_id = data.get('user_id')
    user_id = 1
    recommended_workshops = data.get('recommendedWorkshops')

    if not user_id or not recommended_workshops:
        return jsonify({"message": "Missing required fields"}), 400

    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "User not found"}), 404

    user.recommended_workshops = [workshop for workshop in recommended_workshops if workshop not in user.recommended_workshops]
    db.session.commit()

    return jsonify({
        "message": "Recommended workshops added successfully",
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "completed_workshops": user.completed_workshops,
            "recommended_workshops": user.recommended_workshops
        }
    }), 201
"""

# endpoint for adding new workshops
@main.route('/api/add-workshops', methods=['POST'])
def add_new_workshops():
    data = request.json

    if isinstance(data, list): # If data is a list, process each workshop in the list
        added_workshops = []
        for workshop_data in data:
            name = workshop_data.get('name')
            kind = workshop_data.get('kind')
            description = workshop_data.get('description')

            if name and kind and description:
                new_course = Workshop(
                    name=name,
                    kind=kind,
                    description=description
                )
                db.session.add(new_course)
                added_workshops.append({
                    "name": new_course.name,
                    "kind": new_course.kind,
                    "description": new_course.description
                })
            else:
                return jsonify({
                    "message": "Missing required fields"
                }), 400
        
        db.session.commit()

        return jsonify({
            "message": "Completed workshops added successfully",
            "new_workshops": added_workshops
        }), 201
    
    elif isinstance(data, dict): # If data is a dictionary, process a single workshop
        name = data.get('name')
        kind = data.get('kind')
        description = data.get('description')

        if name and kind and description:
            new_course = Workshop(
                name=name,
                kind=kind,
                description=description
            )
            db.session.add(new_course)
            db.session.commit()

            return jsonify({
                "message": "Completed workshop added successfully",
                "new_workshop": {
                    "name": new_course.name,
                    "kind": new_course.kind,
                    "description": new_course.description
                }
            }), 201
        
        else:
            return jsonify({
                "message": "Missing required fields"
            }), 400
        
    else:
        return jsonify({
            "message": "Invalid data format"
        }), 400

# endpoint for getting all workshops
@main.route('/api/workshops', methods=['GET'])
def get_workshops():
    try:
        workshops = Workshop.query.all()
        if not workshops:
            return jsonify([])
        result = [{"name": workshop.name, "kind": workshop.kind, "description": workshop.description} for workshop in workshops]
        print("Workshops:", result)
        return jsonify(result)
    except Exception as e:
        print("Error fetching workshops:", e)
        return jsonify([])
    

@main.route('/api/generate-recommendations', methods=['GET'])
async def get_recommendations():
    req = request.json
    interests = req.get("content")

    # Organize workshops in dictionaries
    workshops = {
        "technical_skills": [
            "Quality Control in BioTechnology Class (Starts 1/8/24)-  The course curriculum covers a comprehensive range of topics including introduction to quality concepts, levels of compliance and difference (i.e. GLP, GMP, GCP), Data integrity principles and practices, Organizational structure and quality management, document control and Standard Operating Procedures (SOPs), equipment qualification and calibration procedures, software validation processes, vendor qualification and selection, ISO 9001 quality management system, audit management and improvement strategies, risk management and mitigation techniques.",
            "Molecule to Market Place: Regulatory Consideration (Starts 10/28/23) -  The regulatory guidance and pathways for the development and marketing approval of medicinal drugs, considering research, clinical trials, and process development are the backbone of bringing innovation to market. This program is ideal for basic research and translational biology scientists.",
            "Supply Chain Dynamics (Starts 11/18/23) -  This course provides a comprehensive overview of the principles of acquiring various materials for biotechnology as well as focused presentations relating to best practices for commodity-specific acquisitions for Research and Development, Research Use Only Manufacturing (RUO), and U.S. Food and Drug Administration (FDA) regulated Good Manufacturing Practices (cGMP).",
            "Drug Development",
            "Biotech Warehouse Logistics",
            "Lab Essentials: NGS Technician",
            "Customized Bio-Manufacturing",
            "Raw Materials Testing BioPharma",
            "Operating in Regulated Environment",
            "Bio-processing Monitoring and Impurities Testing"
        ],
        "soft_skills": [
            "Claiming Your Strengths and Continuous Learning",
            "Managing Difficult Conversations and Conflicts",
            "Negotiations",
            "Public Speaking and Overcoming Speaking Anxiety",
            "Building Effective Networks",
            "Building Resiliency and Adaptability",
            "Communicating with Confidence",
            "Effective Listening",
            "Teamwork and Problem Solving",
            "Critical Thinking and Time Management"
        ]
    }

    technical_skills = "\n".join([f"- {course}" for course in workshops["technical_skills"]])
    soft_skills = "\n".join([f"- {course}" for course in workshops["soft_skills"]])

    # Create the message
    content = (
        f"The following would be the set of interests, skills, and career goals a user enters. "
        f"Generate recommended workshops considering their interests. In your response, only list the technical skills "
        f"and soft skill workshops that are directly relevant to the provided skills, interests, and career goals. "
        f"Also, the generated response should just be recommended workshop names separated by commas, no additional text. "
        f"For example, your response should just look like course1, course2.\n"
        f"The list of interests are: {interests}\n"
        f"These are the workshops we offer.\n"
        f"Available technical skills workshops:\n{technical_skills}\n"
        f"Available soft skills workshops:\n{soft_skills}"
    )

    message = {
        "model": "llama3",
        "messages": [
            {
                "role": "user",
                "content": content
            }
        ],
        "stream": False
    }

    full_response = ""

    #getting the generated response from llama
    async for part in await AsyncClient().chat(
        model="llama3",
        messages=message["messages"],
        stream=True
    ):

        full_response += part["message"]["content"]
        # print(part["message"]["content"], end="", flush=True)

    workshops = [workshop.strip() for workshop in full_response.split(",")]

    # this is for testing, later get the current user and set the recommended workshops
    user_id = 1
    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "User not found"}), 404
    
    # store the recommended workshops for the user in the database
    user.recommended_workshops = workshops
    db.session.commit()

    return full_response


# endpoint for getting recommended workshops
@main.route('/api/recommended-workshops', methods=['GET'])
def get_recommended_workshops():
    try:
        user_id = 1
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404

        recommended_workshops = user.recommended_workshops
        if not recommended_workshops:
            return jsonify([])
        
        workshops = Workshop.query.filter(Workshop.name.in_(recommended_workshops)).all()

        result = [
            {"name": workshop.name, "kind": workshop.kind, "description": workshop.description} for workshop in workshops
        ]
        return jsonify(result)
    except Exception as e:
        print("Error fetching recommended workshops:", e)
        return jsonify([])