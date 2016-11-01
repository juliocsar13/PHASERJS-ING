var express = require('express');
var router = express.Router();


var userController = require('../controllers/users')
/* GET users listing. */
router.route('/')
    .get(userController.indexView)

module.exports = router;
