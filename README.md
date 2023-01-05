# Verteilte Systeme Projekt WS22/23

## Start the Project with

Switch into the root directory of the project and run:
`docker-compose up`

The docker-compose.yml will start a MariaDB container on port 3306 (change the port in the docker-compose.yml if neccessary) and
then build the NestJS backend. After the start of the backend the frontend gets pulled and started.

### Pre-configured Ports:

- Database: 3306 (MariaDB)
- Backend: 8080 (NestJS)
- Frontend: 8090 (Spring)

## API Endpoints

### GET `/todos`

Returns all todo objects of the database.

### GET `/todos/id/{id}`

Returns the todo object with the `{id}` (Integer number).

### GET `/todos/count`

Returns the amount of the todo objects in the database.

### POST `/todos`

Insert a todo object into the database.
Provide the object as json in the request body.
A sample input would be: 
```json
{
    "todo": "Verteilte Systeme Abgabe",
    "priority": 2
}
```


### POST `/todos/{name}`

Inserts a new todo object into the database with the `{name}` as name and the priority 2.

### DELETE `/todos`
Deletes the todo object of the request body.
A sample input would be:
```json
{
    "todo": "Verteilte Systeme Abgabe",
    "priority": 2
}
```

### DELETE `/todos/{id}`
Deletes the todo object with the `{id}`.