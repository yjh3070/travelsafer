let mysql = require('mysql');

let conn = mysql.createPool({
    host: 'localhost',
    port: 3307,
    // socketPath: './cloudsql/travelsafer:us-central1:travelsafer',
    user: 'root',
    password: '12345678',
    database: 'travelsafer',
    insecureAuth: true,
    dialect: 'mysql',   
    multipleStatements: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = conn;