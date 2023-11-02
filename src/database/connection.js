import { Sequelize } from 'sequelize';
import config from './config/database.config.js';

const env = process.env.NODE_ENV || 'development';
const cnf = config[env];

const sequelize = cnf.use_env_variable ?
  new Sequelize(process.env[cnf.use_env_variable], cnf) :
  new Sequelize(cnf.database, cnf.username, cnf.password, cnf)

export { Sequelize, sequelize };
