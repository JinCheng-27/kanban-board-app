from pydantic import BaseModel

class Task(BaseModel):
    id: str
    content: str

class Tasks(BaseModel):
    _root__: dict[str, Task]


class Column(BaseModel):
    id: str
    title: str
    taskIds: list[str]

class Columns(BaseModel):
    _root__: dict[str, Column]


class Board(BaseModel):
    tasks: Tasks
    columns: Columns
    columnOrder: list[str]
