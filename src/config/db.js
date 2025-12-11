const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
