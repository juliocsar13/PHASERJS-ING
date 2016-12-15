var express = require('express');
var router = express.Router();


var nivelController = require('../controllers/nivelController')
/* GET users listing. */
router.route('/')
    .get(nivelController.indexView)

module.exports = router;
