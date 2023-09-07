const mongoose = require('mongoose');
const Executor = require('../models/executor');


const requestSchema = new mongoose.Schema ({
    name: String,
    surname: String,
    phonenumber: String,
    address: String,
    requestProduct: String,
    requestService: String,
    requestExecutor: String,
    requestDetails: [{ type: String, ref: 'Executor' }],
    completedRequest: Boolean
  });

module.exports = mongoose.model('Request', requestSchema);
