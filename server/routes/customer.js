var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET users listing. */
router.post('/', function (req, res, next) {
  db.findAll("custom", {}, (result) => {
    res.json(result);
  })
});

module.exports = router;
