exports.sessionUser = function(req, res, next) {
    res.locals.termo = "true";
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.warning = req.flash("warning");
    res.locals.user = req.session.user;
    next();
}

exports.rotasExist = function(req, res, next) {
    res.locals.url = req.url;
    res.render("erro", {
        title: "ERRO",
        msg: `Essa rota ${req.url} não existe`
    });
    next();
};

exports.loginRequired = function(req, res, next) {
    if(!req.session.user) {
        req.flash('errors', "Login Requerido");
        return res.redirect("back");
    }
    next();
};

exports.setCookie = function(req, res, next) {
    if(!req.session.user) {
        if(!req.cookies.cookieTermo) {
            let options = {
                maxAge: 1000 * 60 * 15, // would expire after 15 minutes
                httpOnly: true, // The cookie only accessible by the web server
            }

            res.cookie("cookieTermo", "false", options) // options is optional
        }
    }
    res.locals.termo = "true";
    next();
}

exports.allCookie = function(req, res, next ) {
    res.locals.termo = null;
    console.log(req.cookies)
    if(!req.session.user) {
        res.locals.termo = req.cookies.cookieTermo;
    } else {
        res.locals.termo = true
    }
    next();
};

exports.coockieAccept = function(req, res, next) {
    try {
        if(!req.session.user.coockieAccept) {
            req.flash('errors', "Aceite os coockies para usar essa função");
            return res.redirect("back");
        }
    } catch (error) {
        res.render("home");
    }
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        req.flash('errors', "Erro no formulário");
        return req.session.save(() => res.redirect(`/`));
    }
  
    next();
  };
  
  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };