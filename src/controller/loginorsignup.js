const Login = require('../models/LoginOrSignUp');

exports.index = function(req, res) {
    res.render("loginorsignup", {
        title: "Entrar ou Registrar"
    });
};

exports.register = async function(req, res) {
    const login = new Login(req.body);
    await login.register();

    res.send(login.user);
};

exports.login = function(req, res) {
    res.send("login");
};