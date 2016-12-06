var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

var jwt           = require('jsonwebtoken');
var session       = require('express-session');
var flash         = require('express-flash');

var index        = require('./routes/index')
//})
var app           = express();
var models        = require('./models')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(function(req, res, next) {

  if ('OPTIONS' == req.method) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    res.send();
  }
  else {
    next();
  }

});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'keyboard cat',
  resave: true,
  name: "connect.sid",
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: true,
    domain:'http://localhost:3000'
  }

}));

app.use(flash());

app.use(function(req,res,next){
    //console.log('URL D: ',req.url);
  if (req.url!="/" && req.url!="/nosotros" && req.url!="/contactanos") {
     //console.log('PASA POR AQUI');
     var authorization_token = req.signedCookies.authorization_token;
     //console.log('PASA POR AQUI',authorization_token);

    if (!authorization_token) return res.redirect('/')

    req.headers.token  = authorization_token;
    req.headers.user   = jwt.decode(authorization_token);

  }
  /*if (req.url="http://localhost:3000/?lang=es") {
      res.render('/intermedio')
  }*/
  next();

})

models.User.findOne({
    where:{
        email:'julcsar13@gmail.com'
    }

}).then(function(user){

    if (!user) {
        models.User.create({

            nick_name           : 'julito',
            password            : '123456',
            name                : 'Julio',
            lastname            : 'Pari',
            email               : 'julcsar13@gmail.com',
            phone               : '956886883',
            role                : 'costumer',
            flat                : true

        }).then(function(user){
            console.log('se creo al usuario con exito')
        }).catch(function(err){
        	console.log('hubo un error al crear al usuario',err)
        })
    }else{
        console.log('El usuario ya existe')
    }
})


app.use('/', index);
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
