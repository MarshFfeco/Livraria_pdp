const Search = require("../models/Search");

exports.index = async function(req, res) {

    try {
        const search = new Search(req.query);
        const books = await search.buscarLivros();

        if(search.message.length > 0) {
            req.flash('errors', search.message);
            return req.session.save(() => res.redirect(`/`));
        }

        return res.render("search", {
            title: req.query.search,
            books: books,
        })
    } catch (error) {
        req.flash('errors', 'Seu livro não foi encontrado.');
        req.session.save(() => res.redirect(`back`));
    }
}