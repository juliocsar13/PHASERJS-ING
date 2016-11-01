module.exports.indexView = function(req,res){
    console.log(req.headers.user.role);
    if (req.headers.user.role=='admin') {
        res.render('index_staff')
    }else {
        res.render('index_costumer')
    }
}
