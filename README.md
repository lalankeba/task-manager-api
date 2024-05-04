# task-manager-api

Simple RESTful API for managing tasks built wiht Node.js, Express and MongoDB. API supports basic functions such as create, read, update and delete tasks.

## Setup
1. Clone the repository
2. Install the required dependencies by executing `npm install`
3. Create a `.env` file with following contents.
```
MONGO_URI="your-connection-string"
PORT=3000
```
4. Use `npm run dev` command to run the app.

## API Endpoints
- `GET /tasks`: Fetch all tasks.
- `GET /tasks/:id`: Fetch a task by ID.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update a task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.
