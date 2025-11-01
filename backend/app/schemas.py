from pydantic import BaseModel
class QuizIn(BaseModel):
  question: str
  options: list[str]
  answer: str
class QuizOut(QuizIn):
  id: int
  class Config:
    orm_mode = True


