var mongoose= require('mongoose');
var Schema= mongoose.Schema;
const bcrypt = require('bcryptjs');
const saltRounds = 10;

Schema= new mongoose.Schema({
	Name : String,
	Email : String,
    Password : String,
	token: {
		type:String
	} 
});

Schema.pre('save',function(next){
	this.Password= bcrypt.hashSync(this.Password,saltRounds);
	next();
});

var userModel = mongoose.model('userModel', Schema);

module.exports = {userModel};