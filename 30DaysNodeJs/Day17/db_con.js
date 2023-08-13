var mysql = require('mysql');

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Prasad@66",
  database: "mydb"
});

