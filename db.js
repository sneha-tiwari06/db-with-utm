const mysql = require("mysql");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "Sneha@2012",
  database: "pacholi",
};

const db = mysql.createConnection(dbConfig);

module.exports = db;