const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

let connection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express'
})

app.get('/', (req, res) => {
    res.send('This is an API')
})

app.get('/api/users', (req, res) => {

    connection.query('SELECT * FROM MyGuests', (err, rows, fields) => {
        if (err) throw err
        console.log(rows)
        res.send(Object.values(rows))
    })
})

app.get('/api/users/:id', (req, res) => {

    connection.query('SELECT * FROM MyGuests WHERE id=?', [req.params.id], (err, rows, fields) => {
        if (err) throw err
        // console.log(rows)
        res.send(Object.values(rows))
    })
})

app.post('/api/users', (req, res) => {
    firstname = req.body.firstname
    lastname = req.body.lastname
    email = req.body.email

    connection.query('INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)', [firstname, lastname, email], (err, rows, fields) => {
        if (err) throw err
        res.send('ok')
    })
})

app.delete('/api/users/:id', (req, res) => {

    connection.query('DELETE FROM MyGuests WHERE id=?', [req.params.id], (err, rows, fields) => {
        if (err) throw err
        // console.log(rows)
        res.send('ok')
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
