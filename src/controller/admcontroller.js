const Book = require("../models/Adm");

exports.index = function(req, res) {
    res.render("adm", {
        title: "ADM"
    });
};

exports.register = async function(req, res){
    try {
        const bookRegister = new Book(req.body);
        await bookRegister.register();

        if(bookRegister.message.length > 0) {
            res.redirect('back');
        }
        
        res.send(bookRegister.user);
        res.redirect("back");
    } catch (error) {
        console.log("Deu merda");
        return res.render("erro", {
            title: "Erro de Cadastro de Livro",
            url: "Erro na hora de registrar um livro!"
        });
    }
};

exports.edit = function(req, res) {

};

exports.delete = function(req, res){}