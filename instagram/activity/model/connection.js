var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'machine',
  database: 'insta'
})

connection.connect();
console.log("connected tp DB");
module.exports = connection;