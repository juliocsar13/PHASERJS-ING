var models = require('../models')
module.exports.indexView = function(req,res){
    res.render('contact/index')
}
module.exports.createComent = function(req,res){
    models.Contact.create({

        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message

    }).then(function(contact){
        res.redirect('/contactanos')
    }).catch(function(err){
    	res.status(503).send(err.name+" "+err.message);
    })
}
