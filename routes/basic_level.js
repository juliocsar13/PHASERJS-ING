var express = require('express');
var router = express.Router();


var basicController = require('../controllers/basicController')
/* GET users listing. */
router.route('/')
    .get(basicController.indexView)

module.exports = router;
