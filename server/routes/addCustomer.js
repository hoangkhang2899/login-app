var express = require('express');
var router = express.Router();
const { ObjectId } = require('mongodb');

const db = require('../utils/database');

/* GET users listing. */
router.post('/', async (req, res, next) => {
    let data = req.body;
    const insertObject = {};
    let lastKey = Object.keys(data);
    for await (let x of lastKey) {
        if (x === "errorValidate") continue;
        else Object.assign(insertObject, { [x]: data[x] });
    }
    db.insertOne("custom", insertObject, (result) => { 
        res.json({_id: ObjectId(result.insertedId).getTimestamp().toLocaleString("vi-VN")});
    })
});

module.exports = router;
