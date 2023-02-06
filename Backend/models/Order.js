'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Order = Schema({
    userId: String,
    generateDate: Date,
    deliveryDate: Date,
    orderGroups: Array,
    toPay: Number
});

module.exports = mongoose.model("Orders", Order);