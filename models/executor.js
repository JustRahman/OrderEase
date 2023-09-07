const mongoose = require('mongoose');
var express = require('express');


const ExecutorSchema = new mongoose.Schema ({
    name: String,
    phonenumber: String,
    address: String,
    activeExecuter: Boolean,
    RequestQuantity: Number,
});

module.exports = mongoose.model('Executor', ExecutorSchema);