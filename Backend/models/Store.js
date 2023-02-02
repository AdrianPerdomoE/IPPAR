'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Store = Schema({
    name: String,
    image: String,
    tag: String,
    points:Number,
    waitTime:String
});

module.exports = mongoose.model("Stores", Store);