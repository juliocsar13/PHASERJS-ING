var express = require('express');
var router = express.Router();


var entretenimientoController = require('../controllers/entretenimientoController')
/* GET users listing. */
router.route('/')
    .get(entretenimientoController.indexView)

module.exports = router;
