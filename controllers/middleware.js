var jwt = require('jsonwebtoken');
var secret = "ilovescotchyscotch";

module.exports.checkLogin = function(req,res,next){

    var token  = req.headers.token;
    var user = req.headers.user;

    if (!user) return res.redirect('/');
    console.log("DATOS DEL USUARIO",user);

    jwt.verify( token, secret, function(err,decoded){
        if(err) return res.redirect('/login');

    var user_ = req.headers.user.name+' '+ req.headers.user.lastname;
    var role  = req.headers.user.role;


    res.locals.userCurrent  = user_;
    res.locals.roleGroup    = role;

    next();
    })
}
