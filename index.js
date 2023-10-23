const express = require('express');
const usersRouter = require('./routes/users');
const logger = require('morgan');
require('dotenv').config();
// console.log(process.env)

const API_HOST = process.env.API_HOST;
const API_PORT = Number(process.env.API_PORT) || 3000;
const app = express();

app.use(logger('dev'));
app.use('/users', usersRouter);

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
