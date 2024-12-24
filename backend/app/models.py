from . import db
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import Integer, String, Column
from werkzeug.security import generate_password_hash, check_password_hash

# User Table
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(10000), nullable=False)  
    completed_workshops = db.Column(ARRAY(String), default=[])
    recommended_workshops = db.Column(ARRAY(String), default=[])

    def __init__(self, username, email, password, completed_workshops=None, recommended_workshops=None):
        self.username = username
        self.email = email
        self.set_password(password)  
        self.completed_workshops = completed_workshops or []
        self.recommended_workshops = recommended_workshops or []

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    
# Workshops Table
class Workshop(db.Model):
    name = db.Column(db.String(100), primary_key=True, nullable=False)  # Primary key
    kind = db.Column(db.String(50), nullable=False)  # Soft skills or Industry skills
    description = db.Column(db.Text, nullable=False)  # Description of the course

    def __init__(self, name, kind, description):
        self.name = name
        self.kind = kind
        self.description = description



