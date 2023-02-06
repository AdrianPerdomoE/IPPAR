'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Cart = Schema({
    userId: String,
    generateDate: Date,
    deliveryDate: Date,
    orderItems: Array,
    toPay: Number
});

module.exports = mongoose.model("Orders", Order);