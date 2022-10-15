const Book = require("../models/Home");

exports.index = async function(req, res) {
    try {
        const callBook = new Book();
        const book = await callBook.buscarLivro(req.params.id);

        if(callBook.message.length > 0) {
            req.flash('errors', bookRegister.message);
            return req.session.save(() => res.redirect('back'));
        }
    
        res.render("book", {
            title: `${book.titulo} - ${book.autor}`,
            book: book
        })
    } catch (error) {
        req.flash('errors', 'Seu livro não foi encontrado.');
        req.session.save(() => res.redirect(`back`));
    }

};