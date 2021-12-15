var express = require('express');
const cors = require('cors');
var router = express.Router();

const db = require('../utils/database');

/* GET users listing. */
router.post('/', cors(), function (req, res, next) {
  const data = req.body;
  db.findOne("user", { username: data.username, password: data.password }, (result) => {
    if (result) {
      res.json({ id: result._id.toString(), fullname: result.fullname, status: true });
    }
    else {
      res.json({ status: false });
    }
  })
});

module.exports = router;
