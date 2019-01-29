var { userModel } = require('../model/userModel');
var jwt = require('jsonwebtoken');

var authenticate = (req,res,next) =>{
    var token1 = req.header('x-token');
        var decoded;
        
        if(!token1)
        {token1 = req.body.token;}

        console.log(token1);

        try 
        {decoded = jwt.verify(token1,'pkey');}
        catch(error) 
        {res.status(401).send(error); }
        console.log(decoded);           
        userModel.findOne({'_id':decoded._id,'token':token1}).then((usr)=>{
            if(!usr) {return res.status(400).send(error);}
            req.userModel = usr;
            req.token = token1;
            next();
           }).catch((err)=>{
            return res.status(400).send(error);
           });

           }
         
         
    
    
    

module.exports= {authenticate};