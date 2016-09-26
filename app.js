var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

var routes        = require('./routes/index');

var app           = express();

var jwt           = require('jsonwebtoken');
var session       = require('express-session');
var mongoose      = require('mongoose');
var MongoStore    = require('connect-mongo')(session);
var flash         = require('express-flash');

mongoose.connect('mongodb://localhost:27017/phaser-test',function(){
  console.log("connecting with mongodb")
})
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

app.use('/', routes);



app.use(function(req, res, next) {

  if ('OPTIONS' == req.method) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send();
  }
  else {
    next();
  }

});


app.use(session({
  secret:'keyboard cat',
  resave:true,
  saveUninitialized:false,
  store: new MongoStore({mongooseConnection:mongoose.connection})
}))

app.use(flash());

app.use(function(req,res,next){
  if (req.url != "/login") {
    if (req.session.token) {
      req.headers.token = req.session.token;
    } 
    if (!req.headers.token) {
      if(!req.method =="POST") return res.sendStatus(401)
      return res.redirect('/login')
    }
    req.headers.user = jwt.decode(headers.token);
  }
  next();
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
