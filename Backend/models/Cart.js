'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Cart = Schema({
    cartItems:Array,
    userId:String,
    toPay:Number ,
    cantidadItems:Number  
});

module.exports = mongoose.model("Carts", Cart);