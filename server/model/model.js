var Sequence = require('sequence').Sequence;
var database = require("./database");
var ObjectID = require('mongodb').ObjectID;

exports.createUser = function(ip,cb){
    console.log("model");
    var db;
    var sequence = Sequence.create()
    sequence.then(function(next){
        database.getdb(function(err,dbref){
            if(err){
                process.exit(1);
                console.log("connection faild");
            } else {
                db = dbref;
                next();
            }
        })
    }).then(function(next){
        db.users.find().toArray(function(err,res){
            if( res && res.length > 0 ){
                ip["user_role"] ="normalUser";
                ip["created_date"] = new Date();
                next(ip);
            } else {
                ip["user_role"]="admin";
                ip["created_date"] = new Date();
                next(ip);
            }
        })
    }).then(function(next,user){
        db.users.insert(user,function(err,res){
            if( !err && res ){
                cb(null,res)
            } else {
                cb(null,err);
            }
        })
    })
}