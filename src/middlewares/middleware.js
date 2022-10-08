exports.sessionUser = function(req, res, next) {
    res.locals.user = req.session.user;
    next();
}

exports.rul = function(req, res, next) {
 
}

exports.rotas = function(req, res, next) {
    res.locals.url = req.url;
    res.render("erro", {
        title: "ERRO"
    });
    next();
};