var express = require('express');
const { ObjectId } = require('mongodb');
var router = express.Router();

const db = require('../utils/database');

/* GET users listing. */
router.post('/', function (req, res, next) {
  const data = req.body;
  if (ObjectId.isValid(data.sessionID)) next();
  else res.json({status: false})
}, (req, res) => {
  const data = req.body;
  db.findOne("user", { _id: ObjectId(data.sessionID) }, (result) => {
    res.json({ id: result._id.toString(), fullname: result.fullname, status: true })
  })
});

module.exports = router;
