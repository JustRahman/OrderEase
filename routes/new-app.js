var express = require('express');
const bodyParser = require("body-parser");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new-app',  { title: 'Express' });
});

router.post('/', function(req, res) {
  console.log("req.body.Surname");
});

module.exports = router;
