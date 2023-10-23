const express = require('express');
const router = express.Router();

/* GET health check listing. */
router.get('/', function(req, res, next) {
    res.send('it`s works');
});

module.exports = router;
