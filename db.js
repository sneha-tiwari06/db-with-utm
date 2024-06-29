const mysql = require("mysql");
require('dotenv').config();
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT || '3306',
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
});

module.exports = db;
