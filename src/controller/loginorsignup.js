const Login = require('../models/LoginOrSignUp');

exports.index = function(req, res) {
    res.render("loginorsignup", {
        title: "Entrar ou Registrar"
    });
};

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if(login.message.length > 0) {
            return res.redirect('/UsuárioExistente');
        }
        
        res.send(login.user);
    } catch (error) {
        console.log("Erro no loginController");
    }
};

exports.login = function(req, res) {
    res.send("login");
}