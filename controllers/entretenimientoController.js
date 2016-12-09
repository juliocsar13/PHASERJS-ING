module.exports.indexView = function(req,res){
    console.log(req.headers.user.role);
    if (req.headers.user.role=='admin') {
        res.render('index_staff')
    }else {
        res.render('index_costumer')
    }
}
module.exports.indexViewDetailBasic = function(req,res){
    res.render('games/basic/detail')
}

module.exports.indexViewDetailIntermedio = function(req,res){
    res.render('games/intermediate/detail')
}

module.exports.indexViewDetailAdvance = function(req,res){
    res.render('games/advanced/detail')
}
