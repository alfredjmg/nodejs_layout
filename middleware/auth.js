module.exports = function(req, res, next) {
    
    if(req.session && req.session.user){
        next();
    }else{
        return res.status(401).json({
            ok:false,
            error: 'Not logged in'
        })
    }
}