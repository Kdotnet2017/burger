var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) {
                console.log(err);
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (tableName, col1, val1, cb) {
        var queryString = "INSERT INTO ?? (" + col1 + ") VALUES ('" + val1 + "')";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) {
                console.log(err);
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (tableName, col1, val1, id, cb) {
        var queryString = "UPDATE ??  SET " + col1 + "=" + val1 + " WHERE id=" + id;
        connection.query(queryString, [tableName], function (err, result) {
            if (err) {
                console.log(err);
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;