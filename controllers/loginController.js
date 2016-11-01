var models = require('../models')
var jwt    = require('jsonwebtoken')
var config = require('../config/config_localhost')


module.exports.SignIn = function(req,res){

    models.User.findOne({

        where:{
            email:req.body.email,
            password:req.body.password
        }

    }).then(function(user){

        if(user){

            var user = JSON.stringify(user)
            var token = jwt.sign(user,config.postgres.secret);

            var _token_  = jwt.decode(token)



            var flat = _token_.flat;



            if (!flat) return res.redirect('/login')
            res.cookie('authorization_token', token, {signed: true });
            res.redirect('/entretenimiento');

        }
    })
}

module.exports.SignUp = function(req,res){

    var params  = req.body;

    models.User.create({
        nick_name:params.nick_name,
        name:params.name,
        lastname:params.lastname,
        email:params.email,
        password:params.password,
        sexo:params.sexo
    }).then(function(user){
        if (user){
            res.redirect('/')
        }
    })
}

module.exports.indexView = function(req,res){
    return res.render('general')
}
