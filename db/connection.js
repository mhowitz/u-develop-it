const mysql = require('mysql2');
require('dotenv').config();
//connect to database
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        //YourMySql username,
        user: process.env.DB_USER,
        //YOUR mysql password
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    },
    console.log('Connected to the election database!')
);

module.exports = db;