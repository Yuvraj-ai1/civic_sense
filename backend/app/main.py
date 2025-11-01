from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud, database
models.Base.metadata.create_all(bind=database.engine)
app = FastAPI()

# Allow frontend dev server to access API
app.add_middleware(
  CORSMiddleware,
  allow_origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

def get_db():
  db = database.SessionLocal()
  try:
    yield db
  finally:
    db.close()

@app.get('/quizzes', response_model=list[schemas.QuizOut])
def read_quizzes(db: Session = Depends(get_db)):
  quizzes = crud.get_quizzes(db)
  out = []
  for q in quizzes:
    out.append({
      'id': q.id,
      'question': q.question,
      'options': q.options.split(','),
      'answer': q.answer
    })
  return out

@app.post('/quizzes', response_model=schemas.QuizOut)
def add_quiz(quiz: schemas.QuizIn, db: Session = Depends(get_db)):
  return crud.create_quiz(db, quiz)

@app.post('/progress')
def submit_progress(payload: dict):
  return {"status":"ok", "received": payload}


