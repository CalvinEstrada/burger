// Set up MySQL connection.
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "	xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "e0dcwwk68ifva4w4",
    password: "	xms0bhfkxdq45kp1",
    database: "burgers_db",
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: 
    ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
