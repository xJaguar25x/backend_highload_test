const express = require('express');
const logger = require('morgan');
const sequelize = require("./database");
const router = require("./routes");
require('dotenv').config();

const API_HOST = process.env.API_HOST;
const API_PORT = Number(process.env.API_PORT) || 3000;
const app = express();

app.use(logger('dev'));
app.use(router);

const testConnectionDB = async () => {
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}
testConnectionDB()


app.listen({
  host: API_HOST,
  port: API_PORT,
}, (err, address) => {
  if (err) {
    console.error('server starting error', err);
    process.exit(1);
  }

  console.warn('listening on http://%s:%d.', API_HOST, API_PORT);
});

module.exports = app;
