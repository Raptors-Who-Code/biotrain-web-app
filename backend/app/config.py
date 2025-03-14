import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'DATABASE_URL',
        'postgresql://rwc:changemeinprod@localhost:5432/biotrain'
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False


