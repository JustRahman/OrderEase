var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');

var indexRouter = require('./routes/index');
var newAppRouter = require('./routes/new-app');
var appsRouter = require('./routes/apps');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb://0.0.0.0:27017/requestDB", {useNewUrlParser: true});
const requestSchema = new mongoose.Schema ({
  name: String,
  surname: String,
  phonenumber: String,
  address: String,
  requestProduct: String,
  requestService: String,
  requestExecutor: String,
  requestDetails: String,
});
const Request = mongoose.model("Request", requestSchema);


app.use('/', indexRouter);
app.use('/new-app', newAppRouter);
app.use('/apps', appsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(3000, function() {
    console.log("Server started on port 3000.");
  });
