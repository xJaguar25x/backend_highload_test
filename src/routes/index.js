const express = require("express");
const router = express.Router();
const usersRouter = require('./users');
const healthCheckRouter = require('./healthCheck');

// function applyRoutes(app) {
    router.use('/', healthCheckRouter);
    router.use('/users', usersRouter);
// }

module.exports = router;
