from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
class Quiz(Base):
  __tablename__ = 'quizzes'
  id = Column(Integer, primary_key=True, index=True)
  question = Column(String, nullable=False)
  options = Column(String, nullable=False)
  answer = Column(String, nullable=False)


