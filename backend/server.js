const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Devops@230881",
    database: "fullstack_db"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err);
        return;
    }

    console.log("MySQL connected successfully!");
});

// Home route
app.get("/", (req, res) => {
    res.send("Node.js Backend is Running!");
});

// GET all tasks
app.get("/tasks", (req, res) => {
    const sql = "SELECT * FROM tasks";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({
                error: "Database query failed"
            });
        }

        res.json(results);
    });
});

// POST new task
app.post("/tasks", (req, res) => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({
            error: "Task is required"
        });
    }

    const sql = "INSERT INTO tasks (task) VALUES (?)";

    db.query(sql, [task], (err, result) => {
        if (err) {
            console.error("Database insert failed:", err);
            return res.status(500).json({
                error: "Database insert failed"
            });
        }

        res.status(201).json({
            message: "Task added successfully",
            id: result.insertId,
            task: task
        });
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});