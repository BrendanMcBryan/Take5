// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

var connection;

if (process.env.JAWSDB_URL) {
  // JawsDB

  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // local db
  const connection = mysql.createConnection({
    host: process.env.db_host,
    port: process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_password,
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
