const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database

const db = mysql.createConnection(
    {
        host: 'localhost',
        //YourMySql username,
        user: 'root',
        //YOUR mysql password
        password: 'Bc1033273.',
        database: 'election'
    },
    console.log('Connected to the election database!')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

//DEFAULT RESPONSE FOR ANY OTHER REQUEST(NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} at http://localhost:${PORT}`);
});