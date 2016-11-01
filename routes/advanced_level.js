var express = require('express');
var router = express.Router();


var advanceController = require('../controllers/advancedController')

router.route('/')
    .get(advanceController.indexView)

module.exports = router;
