# Registration App (Frontend + Backend with Docker Compose)

This project contains:

- Frontend: HTML + JS registration form
- Backend: Node.js + Express API
- Docker Compose to run both together

## Setup

1. Clone the repository:

   ```
   git clone <repo-url>
   cd project-root
   ```
2. Build and run everything:

   ```
   docker-compose up --build
   ```
3. Access the frontend:

- Open your browser at: http://localhost:8080


4. Submit the form:

- It will send data to the backend (`http://backend:3000/register` inside the Docker network).
- You’ll see success messages and backend logs.


5. Stop the project:

   ```
   docker-compose down
   ```

## Ports

| Service  | Container Port | Host Port |
| -------- | -------------- | --------- |
| Backend  | 3000           | 3000      |
| Frontend | 80 (nginx)     | 8080      |

## Notes

- The frontend talks to the backend using the Docker Compose service name (`backend`), not `localhost`.
- To view backend logs:

  ```
  docker-compose logs backend
  ```
