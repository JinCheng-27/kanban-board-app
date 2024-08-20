from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/board')
def get_board():
    board_data = {
        'tasks' : {
            'task-1': {'id': 'task-1', 'content': 'create video'},
            'task-2': {'id': 'task-2', 'content': 'write blog post'},
            'task-3': {'id': 'task-3', 'content': 'practice coding'},
            'task-4': {'id': 'task-4', 'content': 'practice speaking'},
            'task-5': {'id': 'task-5', 'content': 'practice listening'}
        },
        'columns': {
            'column-1': {'id': 'column-1', 'title': 'To Do', 'taskIds': ['task-2']},
            'column-2': {'id': 'column-2', 'title': 'In Progress', 'taskIds': ['task-1', 'task-4']},
            'column-3': {'id': 'column-3', 'title': 'Done', 'taskIds': ['task-3', 'task-5']}
        },
        'columnOrder': ['column-1', 'column-2', 'column-3']
    }
    return {'board':board_data}