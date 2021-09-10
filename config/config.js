require('dotenv').config();
module.exports = {
    "development": {
        "username": process.env.DB_USER_ID,
        "password": process.env.DB_USER_PASSWORD,
        "database": "SixTimeProject",
        "host": process.env.DB_HOST_NAME,
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "logging": false,
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
