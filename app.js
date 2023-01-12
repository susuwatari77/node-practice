var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// express-session
var session = require("express-session");
app.use(session({secret:"mypage", resave:true, saveUninitialized:true}));

// express-validator
const {check, validationResult} = require("express-validator");

// connect-flash
var flash = require("connect-flash");
app.use(flash());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
var routes = require("./routes/index");
var login = require("./routes/login");
var messageBoard = require("./routes/messageBoard");
var signup = require("./routes/signup");
var user = require("./routes/user");
app.use("/", routes);
app.use("/login", login);
app.use("/signup", signup);
app.use("/logout", function(req, res, next){
  req.session.uid = ""
  res.redirect("/");
});
app.use("/messageBoard", messageBoard);

// middlewares 確認到會員為登入 即無法進入User頁面回到首頁
app.use(function (req, res, next) {
  if(req.session.uid){
    return next();
  }
  res.redirect("/");
});
app.use("/user", user);

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
