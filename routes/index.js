"use strict"

var express = require('express');
var router  = express.Router();
var models            = require('../models')
var config            = require('../config/config_localhost')

var users             = require('./users')
var entretenimiento   = require('./entretenimiento')
var basic             = require('./basic_level')
var intermediate      = require('./intermediate_level')
var advanced          = require('./advanced_level')
var nivel             = require('./nivel')
var jwt               = require('jsonwebtoken')

var contactController = require('../controllers/contactController')
var thenController    = require('../controllers/thenController')
var loginController   = require('../controllers/loginController')
var middleware        = require('../controllers/middleware')


router.route('/')
    .get(loginController.indexView)

router.route('/login')
    .post(loginController.SignIn)

router.use('/entretenimiento',middleware.checkLogin,entretenimiento)
router.use('/basico',middleware.checkLogin,basic)
router.use('/intermedio',middleware.checkLogin,intermediate)
router.use('/avanzado',middleware.checkLogin,advanced)
router.use('/usuarios',users)
router.use('/nivel_de_prueba',nivel)




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
