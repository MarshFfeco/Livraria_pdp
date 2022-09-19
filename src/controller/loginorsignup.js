exports.index = function(req, res) {
    res.render("loginorsignup", {
        title: "Entrar ou Registrar"
    });
};