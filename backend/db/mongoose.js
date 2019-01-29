'use strict'
var mongoose =require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/newsdb');
var db= mongoose.connection;
console.log('connected');

module.exports = {mongoose};