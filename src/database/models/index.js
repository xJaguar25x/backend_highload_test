'use strict';

import fs from'fs';
import Sequelize from'sequelize';
import config from '../config/database.config.js';

const env = process.env.NODE_ENV || 'development';
const cnf = config[env];
const db = {};

let sequelize;
if (cnf.use_env_variable) {
  sequelize = new Sequelize(process.env[cnf.use_env_variable], cnf);
} else {
  sequelize = new Sequelize(cnf.database, cnf.username, cnf.password, cnf);
}

fs
  .readdirSync('./src/database/models/')
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== 'index.js' &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(async (file) => {
    const path = './' + file;
    const { default: data } = await import(path);
    const model = data(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
