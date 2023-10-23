const express = require('express');
const router = express.Router();

/* GET users listing. */
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
