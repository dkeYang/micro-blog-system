var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// const MongoStore = require("connect-mongo");
// const settings = require("./setting.js");
// const session = require('express-session');
// const mehtodOverride = require('method-override');

var index = require('./routes/index');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(mehtodOverride());
// app.use(session({
// 	secret:settings.cookieSecret,
// 	store: new MongoStore({
// 		db:settings.db
// 	})
// }));
// 首页
app.use('/', index);

// 用户主页
app.use("/u/:user",index)

//发表消息
app.use("/post", index);

//注册
app.use("/reg", index);

//登录
app.use("/login", index);

//退出
app.use("/loginout", index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
