# Fullstack Mini Project

A simple full-stack task management application built to understand how a **frontend, Node.js backend, REST API, and MySQL database** work together.

## 📌 Project Overview

This project allows users to add and manage tasks through a web interface.

The application follows this flow:

```text
User
  ↓
Frontend
  ↓
Node.js + Express Backend
  ↓
REST API
  ↓
MySQL Database
```

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Tools

* Git
* GitHub
* VS Code

## 📂 Project Structure

```text
Fullstack-Mini-Project/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Screenshots/
│   ├── frontend.png
│   ├── backend.png
│   ├── mysql.png
│   └── api.png
│
└── README.md
```

## ⚙️ Backend Setup

Go to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the Node.js server:

```bash
node server.js
```

The backend runs on:

```text
http://localhost:3000
```

## 🗄️ MySQL Database Setup

Open MySQL:

```bash
mysql -u root -p
```

Create the database:

```sql
CREATE DATABASE fullstack_db;
```

Select the database:

```sql
USE fullstack_db;
```

Create the tasks table:

```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL
);
```

Check the table:

```sql
SHOW TABLES;
```

Check stored tasks:

```sql
SELECT * FROM tasks;
```

## 🔌 API

The backend provides an API for working with tasks.

### Get Tasks

```text
GET /tasks
```

Example:

```text
http://localhost:3000/tasks
```

This returns the tasks stored in MySQL.

### Add Task

```text
POST /tasks
```

The backend receives the task and stores it in the MySQL database.

## 🧪 Project Testing

The application was tested at different levels:

### 1. Frontend

Open the frontend in the browser and verify that the task interface is displayed correctly.

### 2. Node.js Backend

Check that the Node.js server is running:

```text
Server running on port 3000
```

### 3. API

Open:

```text
http://localhost:3000/tasks
```

The API should return task data in JSON format.

### 4. MySQL

Run:

```sql
SELECT * FROM tasks;
```

This verifies that the task data is actually stored in the database.

## 📸 Screenshots

Important screenshots included in the `Screenshots` folder:

* Frontend application
* Node.js server running
* API response
* MySQL database/table
* Stored task data

## 🎯 What I Learned

Through this project, I learned:

* Basic full-stack application architecture
* Frontend and backend communication
* How REST APIs work
* Node.js and Express basics
* Connecting Node.js with MySQL
* Creating and querying MySQL tables
* Sending data from frontend to backend
* Storing application data in a database
* Using Git and GitHub for version control

## 🚀 Future Improvements

The project can be extended by adding:

* Task deletion
* Task editing
* User authentication
* Task completion status
* Better UI design
* Docker containerization
* CI/CD using GitHub Actions or Jenkins
* Deployment on AWS

## 👨‍💻 Author

**Prasath VS**

GitHub: [Prasath-DevOps](https://github.com/Prasath-DevOps)

---

⭐ This project was created as a learning project to understand full-stack development and prepare for DevOps deployment workflows.
