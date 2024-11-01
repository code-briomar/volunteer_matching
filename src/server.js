
const http = require("http");


const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'VolunteerAPP'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// API endpoint to handle form submission
app.post('/', (req, res) => {
    const { firstName, lastName, dob, email, phone, nationality, gender, describe, whyRole } = req.body;

    const sql = 'INSERT INTO applicants (firstName, lastName, dob, email, phone, nationality, gender, describe, whyRole) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [firstName, lastName, dob, email, phone, nationality, gender, describe, whyRole];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        res.status(200).send('Application submitted successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
