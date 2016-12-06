var express = require('express');
var router  = express.Router();

var users             = require('./users')
var entretenimiento   = require('./entretenimiento')
var basic             = require('./basic_level')
var intermediate      = require('./intermediate_level')
var advanced          = require('./advanced_level')

var contactController = require('../controllers/contactController')
var thenController    = require('../controllers/thenController')
var loginController   = require('../controllers/loginController')
var middleware        = require('../controllers/middleware')

var models            = require('../models')
var jwt               = require('jsonwebtoken')
var config            = require('../config/config_localhost')

router.route('/')
    .get(loginController.indexView)

router.use('/entretenimiento',entretenimiento)
router.use('/usuarios',users)
router.use('/basico',basic)
router.use('/intermedio',intermediate)
router.use('/avanzado',advanced)

router.post('/login',function(req,res){
    models.User.findOne({

        where:{
            email:req.body.email,
            password:req.body.password
        }

    }).then(function(user){

        if(user){
            console.log("hola mundo");
            var user = JSON.stringify(user)
            var token = jwt.sign(user,config.postgres.secret);

            console.log("ANTES DE GURADAR EN LA COOKIE",token);
            var _token_  = jwt.decode(token)

            var flat = _token_.flat;

            if (!flat) return res.redirect('/')
            res.cookie('authorization_token', token, {signed: true });
            res.redirect('/entretenimiento');

        }
    })
})
/*
router.route('/login')
    .post(loginController.login)
*/


router.route('/nosotros')
    .get(thenController.indexView)

router.route('/contactanos')
    .get(contactController.indexView)
    .post(contactController.createComent)

router.get('/logout',function(req,res){
    req.headers.token = null;
    res.clearCookie('authorization_token');
    res.redirect('/')
})
module.exports = router;
