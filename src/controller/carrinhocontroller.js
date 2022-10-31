const Carrinho = require("../models/Carrinho");

exports.index = async function(req, res) {
    const callBooks = new Carrinho(null, req.session.user);
    await callBooks.buscarLivros();

    req.session.carrinho = callBooks.cart;
    res.render("carrinho", {
        title: "carrinho",
        books: callBooks.cart,
    })
};

exports.addBook = async function(req, res) {
    try {
        let idBook = req.params.id;

        const cartAdd = new Carrinho(idBook, req.session.user);
        await cartAdd.addBook();

        if(cartAdd.message.length > 0) {
            req.flash('errors', cartAdd.message);
            return req.session.save(() => res.redirect(`back`));
        }

        req.session.carrinho = cartAdd.cart;
        req.flash('success', `Livro adicionado ao carrinho.`);
        return req.session.save(() => res.redirect(`back`));
    } catch (error) {
        req.flash('errors', 'Erro ao tentar adicionar mais livros');
        return req.session.save(() => res.redirect(`back`));
    }
};

exports.delete = async function(req, res) {
    try {
        let idBook = req.params.id;

        if(!idBook) return res.render('erro');
    
        const deleteBook = new Carrinho();
        const bookDelete = await deleteBook.deleteBook(idBook);
    
        if(!bookDelete) return res.render('erro');
    
        req.session.carrinho = deleteBook.cart;
        req.flash('success', 'Livro Removido da lista.');
        req.session.save(() => res.redirect(`/carrinho/`));
        return;
    } catch (error) {
        req.flash('errors', 'Erro ao tentar remover os livros do carrinho');
        return req.session.save(() => res.redirect(`back`));
    }

};