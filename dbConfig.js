let mysql = require('mysql');

let conn = mysql.createConnection({
    host: '35.239.42.162',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'travelsafer'
});

module.exports = conn;