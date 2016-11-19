var express, app, logger, cookieParser, bodyParser,
contact;

express = require('express');
logger = require('morgan');
cookieParser = require('cookie-parser');
bodyParser = require('body-parser');

// ==========

app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ==========

contact = require('../server/routes/contact.js');

app.use('/contact', contact);

// 404
app.use(function(req, res, next) {
  var err;

  err = new Error('Not Found');
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
