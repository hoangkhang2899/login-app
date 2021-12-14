var MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
var url = process.env.DB_HOST;

module.exports = {
    insertOne: (collect, insert, callback) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("customer");
            dbo.collection(collect).insertOne(insert, function (err, result) {
                if (err) throw err;
                callback(result);
                db.close();
            });
        });
    },

    deleteOne: (collect, deleteObject, callback) => {
        MongoClient.connect(url, (err, db) => {
            if(err) throw err;
            let dbo = db.db("customer");
            dbo.collection(collect).deleteOne(deleteObject, (err, result) => {
                if(err) throw err;
                callback(result);
                db.close();
            });
        });
    },

    findOne: (collect, find, callback) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("customer");
            dbo.collection(collect).findOne(find, function (err, result) {
                if (err) throw err;
                callback(result);
                db.close();
            });
        });
    },
    
    findAll: (collect, find, callback) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("customer");
            dbo.collection(collect).find(find).toArray(function (err, result) {
                if (err) throw err;
                callback(result);
                db.close();
            });
        });
    }
}