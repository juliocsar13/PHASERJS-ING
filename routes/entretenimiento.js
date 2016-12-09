var express = require('express');
var router = express.Router();


var entretenimientoController = require('../controllers/entretenimientoController')
/* GET users listing. */
router.route('/')
    .get(entretenimientoController.indexView)

router.route('/informacion_nivel_basico')
    .get(entretenimientoController.indexViewDetailBasic)

router.route('/informacion_nivel_intermedio')
    .get(entretenimientoController.indexViewDetailIntermedio)

router.route('/informacion_nivel_avanzado')
    .get(entretenimientoController.indexViewDetailAdvance)
module.exports = router;
