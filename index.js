const express = require('express');
const usersRouter = require('./routes/users');
const logger = require('morgan');

const HOST = '0.0.0.0';
const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(logger('dev'));
app.use('/users', usersRouter);

app.listen({
  host: HOST,
  port: PORT,
}, (err, address) => {
  if (err) {
    console.error('server starting error', err);
    process.exit(1);
  }

  console.warn('listening on %s.', PORT);
});

module.exports = app;
