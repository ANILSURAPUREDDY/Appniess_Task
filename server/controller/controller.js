var model = require('../model/model.js');
var router = {};

router.createUser = function(req,res){
    console.log("controller");
    var ip = req.body.params
    if(!ip.username && !ip.firstname && !ip.lastname ){
        res.status(200).send("All Conditions are not met.");
    }
    model.createUser(ip,function(err,resp){
        if(err){
            res.status(200).send(JSON.stringify({status:"Error",msg:"we are facing some issues with server."}));
        } else {
            res.status(200).send({status:"Success",msg:resp});
        }
    })
}

module.exports = router;