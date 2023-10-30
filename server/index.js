const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configure the MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PASSWORD', // Replace with your actual password
  database: 'work',
});

/// Establish a connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    throw err; // Terminate the application if there's an error connecting to the database
  }
  console.log('Connected to the MySQL server.');
});

// Set up a GET endpoint to fetch data from the MySQL database
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM student', (error, results, fields) => {
    if (error) {
      console.error('Error fetching data: ' + error.stack);
      return res.status(500).json({ error: 'Error fetching data' });
    }
    res.json(results);
  });
});

// Handle the POST request to add a new student
app.post('/addStudent', (req, res) => {
  // Access the data from the request body
  const { name, grade, email, password } = req.body;

  const INSERT_STUDENT_QUERY = 'INSERT INTO student (name, grade, email, password) VALUES (?, ?, ?, ?)';

  connection.query(INSERT_STUDENT_QUERY, [name, grade, email, password], (err, result) => {
    if (err) {
      console.error('Error adding student: ' + err.stack);
      return res.status(500).json({ error: 'Error adding student' });
    }
    console.log('Student added successfully');
    return res.status(200).json({ message: 'Student added successfully' });
  });
});

const PORT = 5000; // Or any other port of your choice
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
