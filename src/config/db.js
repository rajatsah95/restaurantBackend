let mysql2 = require("mysql2");
require("dotenv").config();

let connection = mysql2.createConnection({
    host: "localhost",
    port: "3306",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error("DB connection failed:", err);
        return;
    }
    console.log("MySQL connected!");
});

module.exports = connection;
