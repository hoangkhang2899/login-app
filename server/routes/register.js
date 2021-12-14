var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET users listing. */
router.post('/', (req, res, next) => {
  const data = req.body;
  db.findOne("user", { username: data.username }, (result) => {
    if (result) {
      res.json({ status: false });
    }
    else {
      next();
    }
  })
}, (req, res, next) => {
  const data = req.body;
  db.insertOne("user", { fullname: data.fullname, username: data.username, password: data.password }, (result) => {
    res.json({ id: result.insertedId.toString(), status: true })
  });
});

module.exports = router;
