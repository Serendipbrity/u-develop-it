const mysql = require('mysql2');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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


// db object using query method and executes a callback with all resulting rows matching query
// db.query('Select * FROM candidates', (err, rows) => {
//     console.log(rows);
// });


// get single candidate
// db.query(`Select * FROM candidates WHERE id= 10`, (err, rows) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(rows);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result);
// });

// create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//                 VALUES(?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });


// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// function to start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
});