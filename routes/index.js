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


router.route('/')
    .get(loginController.indexView)

router.use('/entretenimiento',entretenimiento)
router.use('/usuarios',users)
router.use('/basico',basic)
router.use('/intermedio',intermediate)
router.use('/avanzado',advanced)


router.route('/login')
    .post(loginController.SignIn)

router.route('/nosotros')
    .get(thenController.indexView)

router.route('/contactanos')
    .get(contactController.indexView)
    .post(contactController.sendContact)


module.exports = router;
