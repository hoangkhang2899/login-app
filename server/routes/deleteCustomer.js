var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET users listing. */
router.post('/', function (req, res, next) {
    let data = req.body;
    db.deleteOne("custom", { inputName: data.inputName, inputID: data.inputID }, () => { });
    res.json("Ok")
});

module.exports = router;
