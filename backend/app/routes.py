from flask import Blueprint, request, jsonify
from .models import User, Workshop, db

main = Blueprint('main', __name__)

@main.route('/api/assess', methods=['GET'])
def assess():
    # Placeholder code for handling assessment data and returning recommendations
    data = request.get_json()
    return jsonify({"message": "Assessment recieved"})


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


# endpoint for adding a new workshop - just for testing
@main.route('/completed-workshops', methods=['post'])
def add_completed_workshops():
    data = request.json

    name = data.get('name')
    kind = data.get('kind')
    desc = data.get('description')

    new_course = Workshop(
        name = name,
        kind = kind,
        description= desc
    )

    db.session.add(new_course)
    db.session.commit()

    return jsonify( {
        "message": "completed workshop added successfully",
        "new_workshop": {
            "name":  new_course.name,
            "kind":  new_course.kind,
            "description":  new_course.description
        }
    }), 201


