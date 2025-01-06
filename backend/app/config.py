import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'DATABASE_URL',
        'postgresql://postgres:Panda@localhost:5432/biotrain-website'
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False









