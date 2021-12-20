var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET users listing. */
router.post('/', function (req, res, next) {
    let data = req.body;
    const insertObject = {};
    let lastKey = Object.keys(data);
    for (let x of lastKey) {
        if (x === "errorValidate") continue;
        else if (x === lastKey[lastKey.length - 1]) {
            Object.assign(insertObject, { [x]: data[x] });
            db.insertOne("custom", insertObject, () => { })
        }
        else Object.assign(insertObject, { [x]: data[x] });
    }
    res.send("Success!")
});

module.exports = router;
