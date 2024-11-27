from . import db
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import Integer, String, Column

class User(db.Model):
   
    username = db.Column(db.String(100), primary_key=True, unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    completed_workshops = db.Column(ARRAY(String), default=[])
    recommended_workshops = db.Column(ARRAY(String), default=[])

    def __init__(self, username, email, password, completed_workshops=None, recommended_workshops=None):
        self.username = username
        self.email = email
        self.password = password
        self.completed_workshops = completed_workshops or []
        self.recommended_workshops = recommended_workshops or []



