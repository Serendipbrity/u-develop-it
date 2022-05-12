const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host:'localhost',
        // your mysql username,
        user: 'root',
        // your mysql password
        password: 'C0de4me23*',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;