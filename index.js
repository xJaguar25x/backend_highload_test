const express = require('express');
const usersRouter = require('./routes/users');

const app = express();

app.use('/users', usersRouter);

app.listen({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 3000,
}, (err, address) => {
  if (err) {
    console.error('server starting error', err);
    process.exit(1);
  }

  console.warn('listening on %s.', address);
});

module.exports = app;
