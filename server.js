var express = require('express');
var {userModel} = require('./backend/model/userModel');
var {mongoose} = require('./backend/db/mongoose');
var bodyParser=require('body-parser');
const bcrypt=require('bcryptjs');
var jwt = require('jsonwebtoken');
var {authenticate} = require('./backend/middleware/authen');


var app = express();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers","Origin,Content-Type,X-Requested-With,Accept,x-token");
    res.setHeader("Access-Control-Expose-Headers","x-token");
    next();
});
app.use(bodyParser.json());



 //to register user
app.post('/register',authenticate,(req,res)=>{
    
    var user = new userModel(req.body);
    user.save().then((result)=>{
        res.status(200).send(result);
        
    }).catch((err)=>{
        res.status(400).send(err);
    });
    console.log(req);
});


//to login and token
app.post('/login', (req,res)=> {

    userModel.findOne({"Email":req.body.Email}).then((result)=>{
        if (!result){return res.status(404).send();}
        bcrypt.compare(req.body.Password,result.Password,(er,reslt)=>{
        if(reslt){
            var token1 =jwt.sign({_id: result._id},'pkey',{expiresIn:10}).toString();
            result.token = token1;
            console.log(token1);  
            res.status(200).header('x-token',token1).send(result);
            result.save().then(()=>{
        });
        }if(er){res.status(400).send(er);}
        });    
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

app.listen(3000,()=>{
    console.log("server is listening");
});