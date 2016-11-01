module.exports.indexView = function(req,res){
    res.render('index',{title:'codeCamp'});
}

module.exports.createUser = function(req,res){
    models.User.create({
        id:req.body.id,
        name: req.body.name,
        lastname:req.body.lastname,
        nick_name : req.body.nick_name,
        sexo: req.body.sexo,
        email:req.body.email,
        password:req.body.password,
        born:req.body.born

    }).then(function(user){
        res.redirect('back');
    }).catch(function(err){
    	res.status(503).send(err.name+" "+err.message);
    })
}

module.exports.editUser = function(req,res){
    models.User.find({
        where:{
            id:req.params.id
        }
    }).then(function(user){
        if(user){
            res.json(user)
        }
    })
}

module.exports.editAllUser = function(req,res){
    models.User.find({
        where:{
            id:req.params.id
        }
    }).then(function(user){

        if (user) {
            user.updateAttributes({
                name      : req.body.name,
                lastname  : req.body.lastname,
                phone     : req.body.phone,
                nick_name : req.body.nick_name,
                password  : req.body.password,
                email     : req.body.email


            }).then(function(user){
                res.send(user)
            })
        }
    })
}
