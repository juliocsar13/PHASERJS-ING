var jwt = require('jsonwebtoken');

module.exports.checkLogin = function(req,res,next){
    var user = req.headers.user;
     if (!user) return res.redirect('/login');

    var secret = "ilovescotchyscotch";

    jwt.verify(user,secret,function(err,decoded){
        if(err) return res.redirect('/login');

        var _user_ = jwt.decode(req.session.user);


        var role  = _user_.role;
        var user_  = _user_.name +" "+_user_.lastname;

        res.locals.userCurrent  = user_;
        res.locals.roleGroup    = role;

        next();
    })
}
