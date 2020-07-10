let mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '12345678',
    database: 'travelsafer'
});

module.exports = conn;