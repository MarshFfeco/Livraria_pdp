exports.sessionUser = function(req, res, next) {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
}

exports.rotasExist = function(req, res, next) {
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