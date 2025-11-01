from sqlalchemy.orm import Session
from . import models, schemas
def get_quizzes(db: Session):
  return db.query(models.Quiz).all()
def create_quiz(db: Session, quiz: schemas.QuizIn):
  db_quiz = models.Quiz(question=quiz.question, options=','.join(quiz.options), answer=quiz.answer)
  db.add(db_quiz)
  db.commit()
  db.refresh(db_quiz)
  return db_quiz


