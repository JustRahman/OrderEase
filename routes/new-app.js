const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Executor = require('../models/executor');
const Request = require('../models/request');

router.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://easyorder:EasyOrder1234.@cluster0.tczifep.mongodb.net/requestDB',{useNewUrlParser:true});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new-app.ejs', { title: 'Express' });
});


router.post('/submit', function(req, res) {
  const newRequest = Request({
    name:req.body.Name,
    surname:req.body.Surname,
    phonenumber:req.body.PhoneNumber,
    address:req.body.Address,
    requestProduct:req.body.Product,
    requestService:req.body.Service,
    requestExecutor:req.body.Executor,
    requestDetails:req.body.Details,
    completedRequest:false,
  }); 

  const newExecuter = Executor({
    name:req.body.Executor,
    activeExecuter:true,
    phonenumber:req.body.Details,
    address:req.body.Address,
    RequestQuantity:1
  }); 
  
  Executor.findOne({phonenumber:req.body.Details}).then(function(articles) {
    if (articles) {
      console.log("asdasda");
      console.log(articles);
      articles.RequestQuantity++;
      console.log(articles.RequestQuantity);

      articles.save().then(function(articles) {
        console.log("No error arise");
      }).catch(function(err){console.log(err);});

      } else {
        newExecuter.save().then(function(articles) {
          console.log("No error arise");
        }).catch(function(err){console.log(err);});
      }
    
      
  }).catch(function(err){console.log(err);});

 

  console.log("sdf");
  newRequest.save().then(function(articles) {
    console.log("No error arise");
  }).catch(function(err){console.log(err);});

  res.redirect('/apps'); 
});

module.exports = router;
// db.executors.find().sort({RequestQuantity:-1}).limit(3)