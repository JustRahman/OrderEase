var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();

const Executor = require('../models/executor');

mongoose.connect('mongodb+srv://easyorder:EasyOrder1234.@cluster0.tczifep.mongodb.net/requestDB',{useNewUrlParser:true});


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("done");

  Executor.find().sort({ RequestQuantity: -1 }).limit(3)
    .then(executors => {
      var executorNameArray = [];
      var executorPhoneNumberArray = [];

      executors.forEach(function(executor) {
        executorNameArray.push(executor.name);
        executorPhoneNumberArray.push(executor.phonenumber);
      });
      console.log(executorNameArray);
      console.log(executorPhoneNumberArray);
  res.render('index', {NameArray:executorNameArray,NumberArray:executorPhoneNumberArray});

        console.log("don11e1222");
    })
    .catch(err => console.error('Failed to query executors', err));





});

router.post('/index', function(req, res, next) {

});

module.exports = router;
