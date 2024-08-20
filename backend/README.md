# Task Management Application

This repository contains the Task Management Application, a Trello-like Kanban-style board for managing tasks. The application is split into two main parts: the backend (FastAPI) and the frontend (React + Vite). 

p.s.: Current progress is up until the backend and the frontend has been implemented in a simple manner, yet to establish connection with the database and the functions for users to login and register is not available yet.


## Tech Stack
### Backend
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Poetry](https://img.shields.io/badge/Poetry-%233B82F6.svg?style=for-the-badge&logo=poetry&logoColor=0B3D8D)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)

### Frontend
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

| __Database__ | __Version Control__ | __Containerization__ | __IDE__ |
| :--- | :--- | :--- | :--- |
| ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) | ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) | ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) | ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

p.s.: Unreliazed tech stacks (Tailwind CSS + Next.js)

## Getting Started
### Backend Setup (FastAPI)
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. If poetry is installed, run `poetry install` to install all required dependencies. Otherwise:
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
    ```
3. Host the API server:
    ```bash
    uvicorn app.main:app --reload
    ```
    The backend in interactive mode will be available at http://localhost:8000.

### Frontend Setup (React + Vite)
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Host the frontend server:
    ```bash
    npm run dev
    ```
    The frontend will be available at http://localhost:5173.

### Database Setup (PostgreSQL)
1. Currently it is completed up until setting up Adminer with docker-compose:
    ```bash
    docker-compose up
    ```