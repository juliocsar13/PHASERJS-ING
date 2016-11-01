var express = require('express');
var router = express.Router();


var intermediateController = require('../controllers/intermediateController')
/* GET users listing. */
router.route('/')
    .get(intermediateController.indexView)

module.exports = router;
