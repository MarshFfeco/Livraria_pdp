const Carrinho = require("../models/Carrinho");

exports.index = async function(req, res) {
    const callBooks = new Carrinho(null, req.session.user);
    const books = await callBooks.buscarLivros();

    console.log(books)

    res.render("carrinho", {
        title: "carrinho",
        books: books,
    })
};

exports.addBook = async function(req, res) {
    try {
        let idBook = req.params.id;

        const cartAdd = new Carrinho(idBook, req.session.user);
        await cartAdd.addBook()

        if(cartAdd.message.length > 0) {
            req.flash('errors', cartAdd.message);
            return req.session.save(() => res.redirect(`back`));
        }
        
        req.flash('success', `Livro adicionado ao carrinho.`);
        return req.session.save(() => res.redirect(`/carrinho`));
    } catch (error) {
        res.render("erro", {
            title: "Erro de Login",
            url: "Erro"
        });
    }

};

exports.delete = async function(req, res) {
    try {
        let idBook = req.params.id;

        if(!idBook) return res.render('erro');
    
        const deleteBook = new Carrinho();
        const bookDelete = await deleteBook.deleteBook(idBook);
    
        if(!bookDelete) return res.render('erro');
    
        req.flash('success', 'Livro Removido da lista.');
        req.session.save(() => res.redirect(`/carrinho/`));
        return;
    } catch (error) {
        res.render("erro", {
            title: "Erro de Login",
            url: error.message
        })
    }

};