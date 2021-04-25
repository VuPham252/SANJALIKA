// import thu vien
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//library of session
var cookieSession = require('cookie-session');

// import cac route
var usersRouter = require('./routes/users');
var newRouter = require('./routes/newRoute');

var app = express();

//session
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
//session-het

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) =>{
  res.setHeader ('Access-Control-Allow-Origin', '*');
  next();
})
app.use('/', usersRouter);
app.use('/', newRouter);

// catch 404 and forward to error handler

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.sendStatus(err.status || 500);
  //res.render('error');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app is listening`)
})




//tao 1 bien de lam viec voi db


