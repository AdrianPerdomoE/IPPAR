'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Product = Schema({
    name: String,
    image: String,
    price: Number,
    description:String,
    owner:String
});

module.exports = mongoose.model("Products", Product);