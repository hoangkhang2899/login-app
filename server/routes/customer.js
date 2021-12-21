var express = require('express');
var router = express.Router();
const { ObjectId } = require('mongodb');

const db = require('../utils/database');

/* GET users listing. */
router.post('/', function (req, res, next) {
  const { sessionID } = req.body;
  if (ObjectId.isValid(sessionID)) {
    db.findOne("user", { _id: ObjectId(sessionID) }, (result) => {
      if (result) {
        db.findAll("custom", {}, async result => {
          for await (let x of result) {
            x._id = ObjectId(x._id.toString()).getTimestamp().toLocaleString("vi-VN");
          }
          res.json(result);
        })
      }
      else {
        new Error("Invalid session");
      }
    });
  }
  else {
    new Error("Invalid session");
  }
});

module.exports = router;
