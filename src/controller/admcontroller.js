const Book = require("../models/Adm");


exports.index = async function(req, res) {
    const books = new Book(req.body);
    const book =  await books.buscarLivros(req.session.user._id);

    res.render("adm", {
        title: "ADM",
        book: book,
    });
};

exports.register = async function(req, res){
    try {
        const bookRegister = new Book(req.body, req.session.user);
        await bookRegister.register();

        if(bookRegister.message.length > 0) {
            req.flash('errors', bookRegister.message);
            res.redirect('back');
        }

        req.flash('success', 'Seu livro foi cadastrado.');
        return res.redirect("back");
    } catch (error) {
        return res.render("erro", {
            title: "Erro de Cadastro de Livro",
            url: "Erro na hora de registrar um livro!"
        });
    }
};

exports.edit = function(req, res) {

};

exports.delete = function(req, res){}