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
            req.flash('errors', register.message);
            return res.redirect('back');
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.user = register.user;
        return res.redirect('/');
        
    } catch (error) {
        return res.render("erro", {
            title: "Erro de Cadastro"
        });
    }
};

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        if(login.message.length > 0) {
            req.flash('errors', login.message);
                return res.redirect('back');
        }

        req.flash('success', 'Login realizado com sucesso.');
        req.session.user = login.user;
        console.log(req.session);
        return res.redirect('/');
       
    } catch (error) {
        res.render("erro", {
            title: "Erro de Login"
        })
    }
}

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect("/");
    console.log(req.session);
}