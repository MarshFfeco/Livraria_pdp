const Carrinho = require("../models/Carrinho");

exports.index = async function(req, res) {
    const callBooks = new Carrinho();
    const books = await callBooks.buscarLivros(req.session.user._id);

    res.render("carrinho", {
        title: "carrinho",
        books: books,
    })
};

exports.addBook = async function(req, res) {
    try {
        let idBook = req.params.id;

        const cartAdd = new Carrinho(idBook, req.session.user);
        /*const books = await cartAdd.buscarLivros(req.session.user._id);*/
        //const bookAdd = await cartAdd.addBook();
        await cartAdd.addBook()

        if(cartAdd.message.length > 0) {
            req.flash('errors', cartAdd.message);
            return req.session.save(() => res.redirect(`back`));
        }
        
        req.flash('success', 'Livro adicionado ao carrinho.');
        return req.session.save(() => res.redirect(`/carrinho`));
    } catch (error) {
        res.render("erro", {
            title: "Erro de Login",
            url: "Erro"
        })
    }

};