from pydantic import BaseModel
from typing import Optional, Dict, List

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str

class UserInDB(UserBase):
    id: int
    board: Optional[Dict[str, List]] = {"tasks": {}, "columns": {}, "columnOrder": []}

    class Config:
        orm_mode = True

class UserIn(UserBase):
    password: str
