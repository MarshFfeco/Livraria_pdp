exports.sessionUser = function(req, res, next) {
    //res.locals.book = req.session.book;
    res.locals.user = req.session.user;
    next();
}

exports.rotas = function(req, res, next) {
    res.locals.url = req.url;
    res.render("erro", {
        title: "ERRO"
    });
    next();
};

exports.loginRequired = function(req, res, next) {
    if(!req.session.user) {
        res.redirect("/");
        return;
    }
    next();
};