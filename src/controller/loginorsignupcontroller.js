const Login = require('../models/LoginOrSignUp');

exports.index = function(req, res) {
    res.render("loginorsignup", {
        title: "Entrar ou Registrar"
    });
};

exports.register = async function(req, res) {
    try {
        const register = new Login(req.body, null);
        await register.register();

        if(register.message.length > 0) {
            req.flash('errors', register.message);
            return req.session.save(() => res.redirect(`back`));
        }

        req.session.user = register.user;
        req.flash('success', 'Seu usuário foi criado com sucesso.');
        return req.session.save(() => res.redirect(`/`));
        
    } catch (error) {
        req.flash('errors', 'Erro ao tentar se registrar');
        return req.session.save(() => res.redirect(`back`));
    }
};

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        if(login.message.length > 0) {
            req.flash('errors', login.message);
            return req.session.save(() => res.redirect(`back`));
        }
        req.session.user = login.user;
        req.flash('success', 'Login realizado com sucesso.');
        return req.session.save(() => res.redirect(`/`));
       
    } catch (error) {
        console.log(error)
        req.flash('errors', 'Login não efetuado');
        return req.session.save(() => res.redirect(`back`));
    }
}

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect(`/`);
}

exports.editUser = function(req, res) {
    res.render("editUser", {
        title: "Edita Usuário"
    })
}

exports.editUserComplete = async function(req, res) {
    try {
        let idUser = req.session.user._id;

        if(!idUser) return res.redirect(`back`)

        const userEdit = new Login(req.body, req.session.user.adm);
        await userEdit.userEdit(idUser);

        if(userEdit.message.length > 0) {
            req.flash('errors', userEdit.message);
            return req.session.save(() => res.redirect("back"));
        }

        req.session.user = userEdit.user;

        req.flash('success', `Usuário editado com sucesso.`);
        req.session.save(() => res.redirect(`/adm/${req.session._id}`));
        return;
    } catch (error) {
        console.log(error)
        req.flash('errors', 'Erro ao tentar editar o usuário');
        return req.session.save(() => res.redirect(`back`));
    }
    
}

exports.deleteUser = async function(req, res) {
    try {
        let idUser = req.session.user._id;

        if(!idUser) return res.redirect(`back`)

        const userDelete = new Login(idUser);
        await userDelete.userDelete();

        if(userDelete.message.length > 0) {
            req.flash('errors', userDelete.message);
            return req.session.save(() => res.redirect("back"));
        }

        req.session.destroy();
        res.redirect(`/`);
    } catch (error) {
        req.flash('errors', 'Seu usuário não foi deletado');
        return req.session.save(() => res.redirect(`/`));
    }
}

exports.accept = async function(req, res) {
    try {
        
       if(req.session.user) {
            let idUser = req.session.user._id;

            if(!idUser) return res.redirect(`back`)

            const userEdit = new Login();
            await userEdit.aceptCoockie(idUser);

            if(userEdit.message.length > 0) {
                req.flash('errors', userEdit.message);
                return req.session.save(() => res.redirect("back"));
            }

            req.session.user = userEdit.user;
        } else {
            let options = {
                maxAge: 1000 * 60 * 15, // would expire after 15 minutes
                httpOnly: true, // The cookie only accessible by the web server
            }

            console.log("mudei");

            res.cookie("cookieTermo", "true", options);
        }

        req.flash('success', `Contrato aceito.`);
        req.session.save(() => res.redirect(`back`));
        return;
    } catch (error) {
        console.log(error)
        req.flash('errors', 'Erro ao tentar aceitar o contrato');
        return req.session.save(() => res.redirect(`back`));
    }
}