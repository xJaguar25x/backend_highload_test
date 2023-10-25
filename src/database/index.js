import config from './config/database.config.js';
import { Sequelize } from 'sequelize';

/*
// Option 1: Passing a connection URI
module.exports = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: /!* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' *!/
});
*/

const db = new Sequelize(config.development.database, config.development.username, config.development.password, {
    ...config.development,
});

export default db;
