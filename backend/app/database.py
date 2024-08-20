from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql+psycopg2://fastapi_user:abcd1234@127.0.0.1:5432/users"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency to get the session for each request
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
