# REST API with ExpressJS

Disclaimer: I'm just plaing around - I have no idea if any of this is good practise or not.

The following table in MySql database `MyGuests` was used for testing:

```
+-----------+-----------------+------+-----+---------------------+-------------------------------+
| Field     | Type            | Null | Key | Default             | Extra                         |
+-----------+-----------------+------+-----+---------------------+-------------------------------+
| id        | int(6) unsigned | NO   | PRI | NULL                | auto_increment                |
| firstname | varchar(30)     | NO   |     | NULL                |                               |
| lastname  | varchar(30)     | NO   |     | NULL                |                               |
| email     | varchar(50)     | YES  |     | NULL                |                               |
| reg_date  | timestamp       | NO   |     | current_timestamp() | on update current_timestamp() |
+-----------+-----------------+------+-----+---------------------+-------------------------------+
```

run `node index.js`

try accessing endpoints:

GET http://localhost:3000/api/users

GET http://localhost:3000/api/users/1

POST http://localhost:3000/api/users
```
{
"firstname": "Some",
"lastname": "User",
"email": "some.user@gmail.com"
}
```
DELETE http://localhost:3000/api/users/1

