# MERN Stack Project (React, Node.js/Express, MongoDB) with Docker

## Overview

This is a full-stack MERN application (MongoDB, Express, React, Node.js) that includes a backend API, frontend React application, and a MongoDB database. The project is containerized using Docker to ensure consistent and efficient deployment across different environments.

### Technologies Used:

* **Frontend** : React.js
* **Backend** : Node.js with Express.js
* **Database** : MongoDB
* **Containerization** : Docker (for both backend and frontend)
* **Environment** : Docker Compose for multi-container management

---

## Table of Contents

1. [Prerequisites](https://chatgpt.com/c/681abeaa-7610-8013-9c37-1bddfd511825#prerequisites)
2. [Getting Started](https://chatgpt.com/c/681abeaa-7610-8013-9c37-1bddfd511825#getting-started)
3. [Running the Application](https://chatgpt.com/c/681abeaa-7610-8013-9c37-1bddfd511825#running-the-application)
4. [Directory Structure](https://chatgpt.com/c/681abeaa-7610-8013-9c37-1bddfd511825#directory-structure)
5. [Docker Commands](https://chatgpt.com/c/681abeaa-7610-8013-9c37-1bddfd511825#docker-commands)
6. [Usage](https://chatgpt.com/c/681abeaa-7610-8013-9c37-1bddfd511825#usage)
7. [Troubleshooting](https://chatgpt.com/c/681abeaa-7610-8013-9c37-1bddfd511825#troubleshooting)
8. [License](https://chatgpt.com/c/681abeaa-7610-8013-9c37-1bddfd511825#license)

---

## Prerequisites

To run this project, make sure you have the following installed:

* **Docker** : [Install Docker](https://docs.docker.com/get-docker/)
* **Docker Compose** : [Install Docker Compose](https://docs.docker.com/compose/install/)
* **Git** (optional): [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---

## Getting Started

1. **Clone the Repository**

   Clone this repository to your local machine:

   ```bash
   git clone 
   cd <React>
   ```
2. **Build the Docker Containers**

   Build all Docker images (backend, frontend, and MongoDB):

   ```bash
   docker-compose build
   ```
3. **Create a `.env` file**

   Make sure your backend contains a `.env` file with the following environment variables:

   ```env
   MONGO_URI=mongodb://mongodb:27017/regformdb
   ```
4. **Run the Containers**

   Start the application using Docker Compose:

   ```bash
   docker-compose up
   ```

   * This will start three services: the frontend (React app), the backend (Express API), and MongoDB.
   * Your application will be available on:
     * **Frontend** : `http://localhost:5173`
     * **Backend API** : `http://localhost:3000`

   Docker Compose will also create necessary volumes, networks, and manage the lifecycle of containers.

---

## Running the Application

Once your containers are up and running:

* **Frontend** : The React app will be accessible on `http://localhost:5173`.
* **Backend** : The API endpoints will be accessible on `http://localhost:3000`.
* You can check the `/health` endpoint to ensure the backend is running:
  ```bash
  curl http://localhost:3000/health
  ```

---

## Directory Structure

Here is an overview of the project structure:

```
my-mern-docker-app/
├── backend/                # Node.js/Express backend
│   ├── models/             # MongoDB models
│   ├── server.js           # Entry point for the backend server
│   └── .env                # Backend environment variables
├── frontend/               # React frontend
│   ├── src/                # React source code
│   ├── public/             # Public assets for the React app
│   └── Dockerfile          # Dockerfile for frontend
├── docker-compose.yml      # Docker Compose configuration
├── README.md               # This file
└── .gitignore              # Ignore unnecessary files
```

* **backend/`: Contains the Express API and MongoDB models.
* **frontend/** : Contains the React app.
* **docker-compose.yml** : Defines services for Docker Compose.
* **Dockerfile** : Contains instructions for building Docker images for both backend and frontend.

---

## Docker Commands

Here are some useful Docker commands for managing the containers:

* **Build containers** :

```bash
  docker-compose build
```

* **Start containers** :

```bash
  docker-compose up
```

* **Stop containers** :

```bash
  docker-compose down
```

* **View logs** :

```bash
  docker-compose logs
```

* **Remove unused volumes** :

```bash
  docker volume prune
```

* **Execute a command in a running container** (for example, connect to the backend container):
  ```bash
  docker exec -it <container_id> bash
  ```

---

## Usage

### Backend API Endpoints

* **POST /register** : Registers a new user.
* Request body:
  ```json
  {
    "name": "user",
    "email": "user@example.com",
    "password": "password"
  }
  ```
* **GET /users** : Fetches all registered users.
* **GET /health** : Health check endpoint for the backend.

### Frontend

* The React frontend contains a registration form where users can register. The form sends a POST request to the `/register` endpoint of the backend.

---

## Troubleshooting

* **MongoDB connection issues** : Ensure MongoDB is running and that the `MONGO_URI` environment variable in `.env` is correct.
* **CORS errors** : Make sure that the `cors` middleware is enabled in your backend, allowing requests from the React frontend.
* **Ports already in use** : If the ports (3000 for backend, 5173 for frontend) are already in use by other services, either stop those services or change the ports in `docker-compose.yml`.

---

## License

This project is licensed under the MIT License - see the [LICENSE](https://chatgpt.com/c/LICENSE) file for details.

---
