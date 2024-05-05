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

## Task Object
```
{ 
    "title": "Complete Project Proposal", 
    "description": "Prepare and submit the project proposal", 
    "status": "IN_PROGRESS" 
}
```
Valid status values are `PENDING`, `IN_PROGRESS` and `DONE`.

## Sample Requests

### Get all tasks
```
curl http://localhost:3000/tasks
```

### Get task by id
Privide the `id` with appropriate value
```
curl http://localhost:3000/tasks/<id>
```

### Create task
```
curl http://localhost:3000/tasks -H 'Content-Type: application/json' -d '{ "title": "Complete Project Proposal", "description": "Prepare and submit the project proposal.", "status": "IN_PROGRESS" }'
```

### Update task
Privide the `id` with appropriate value
```
curl -X PUT http://localhost:3000/tasks/<id> -H 'Content-Type: application/json' -d '{ "title": "Go home", "description": "Check roof", "status": "IN Prrgress" }'
```

### Delete task
Privide the `id` with appropriate value
```
curl -X DELETE http://localhost:3000/tasks/<id>
```