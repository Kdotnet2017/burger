var mysql = require("mysql");
if(process.env.NODE_ENV!=="production"){
    require("dotenv").load();
}
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host:process.env.DB_HOST,
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    });
}

connection.connect();
module.exports = connection;