const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aladdin@3777",
  database: "e-commerce",
});

module.exports = connection;
