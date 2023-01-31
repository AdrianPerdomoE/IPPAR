'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var User = Schema({
    name: String,
    password: String,
    address: String,
    email:String
});

module.exports = mongoose.model("Users", User);