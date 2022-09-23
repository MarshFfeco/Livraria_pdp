exports.rotas = function(req, res, next) {
    res.locals.url = req.url;
    res.render("erro", {
        title: "ERRO"
    });
};