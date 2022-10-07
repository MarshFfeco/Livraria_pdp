const Login = require('../models/LoginOrSignUp');

exports.index = function(req, res) {
    res.render("loginorsignup", {
        title: "Entrar ou Registrar"
    });
};

exports.register = async function(req, res) {
    try {
        const register = new Login(req.body);
        await register.register();

        if(register.message.length > 0) {
            res.redirect('back');
        }
        
        res.send(register.user);
    } catch (error) {
        res.render("erro", {
            title: "Erro de Cadastro"
        });
    }
};

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        if(login.message.length > 0) {
            res.redirect('back');
        }

        req.session.user = login.user;
        res.redirect("/");
        console.log("Logado com sucesso");
    } catch (error) {
        res.render("erro", {
            title: "Erro de Login"
        })
    }
}

exports.logout = function(req, res) {
    req.session.destroy();

    res.redirect("/");
}