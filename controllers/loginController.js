var models = require('../models')
var jwt    = require('jsonwebtoken')
var config = require('../config/config_localhost')


module.exports.login = function(req,res){
    console.log('HOLA',req.body);
    models.User.findOne({

        where:{
            email:req.body.email,
            password:req.body.password
        }

    }).then(function(user){

        if(user){
            console.log("hola mundo");
            var user = JSON.stringify(user)
            var token = jwt.sign(user,config.postgres.secret);

            console.log("ANTES DE GURADAR EN LA COOKIE",token);
            var _token_  = jwt.decode(token)

            var flat = _token_.flat;

            if (!flat) return res.redirect('/')
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
