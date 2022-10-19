const Book = require("../models/Adm");

exports.index = async function(req, res) {
    try {
        const callBook = new Book(req.body);
        const books =  await callBook.buscarLivros(req.session.user._id);

        if(callBook.message.length > 0) {
            req.flash('errors', callBook.message);
            return req.session.save(() => res.redirect('/'));
        }
    
        let idBook = req.params.id.replace(/}/, '');
    
        if(idBook == req.session.user._id) idBook = null;
    
        return res.render("adm", {
            title: "ADM",
            books: books,
            editbook: idBook
        });
    } catch (error) {
        console.log(error)
        req.flash('errors', error.message);
        req.session.save(() => res.redirect(`back`));
    }
}

exports.register = async function(req, res){
    try {
        const bookRegister = new Book(req.body, req.session.user);
        await bookRegister.register();

        if(bookRegister.message.length > 0) {
            req.flash('errors', bookRegister.message);
            return req.session.save(() => res.redirect('back'));
        }

        req.flash('success', `Livro ${bookRegister.body.titulo} cadastrado.`);
        return req.session.save(() => res.redirect(`/adm/${bookRegister.user._id}`));
    } catch (error) {
        req.flash('errors', 'Seu livro não foi cadastrado.');
        req.session.save(() => res.redirect(`back`));
    }
}

exports.edit = async function(req, res) {
    let idBook = req.params.id;

    const callBook = new Book(req.body);
    const books =  await callBook.buscarLivros(req.session.user._id);
    const editbook = await callBook.buscarLivro(idBook, req.session.user._id);

    if(idBook == req.session.user._id) idBook = null;

    return res.render("adm", {
        title: "ADM",
        books: books,
        editbook: editbook
    });
}

exports.editBook = async function(req, res) {
    try {
        const bookEdit = new Book(req.body, req.session.user);
        await bookEdit.edit(req.body.Idlivro);

        if(bookEdit.message.length > 0) {
            req.flash('errors', bookEdit.message);
            return req.session.save(() => res.redirect("back"));
        }

        req.flash('success', `Livro ${bookEdit.body.titulo} editado.`);
        return req.session.save(() => res.redirect(`/adm/${bookEdit.user._id}`));
    } catch (error) {
        req.flash('errors', 'Seu livro não foi editado.');
        req.session.save(() => res.redirect('back'));
    }
}

exports.delete = async function(req, res) {
    let idBook = req.params.id;

    if(!idBook) return res.render('erro');

    const deleteBook = new Book(req.body, req.session.user);
    const bookDelete = await deleteBook.delete(idBook);

    if(!bookDelete) return res.render('erro');

    req.flash('success', `Livro ${req.params.id} apagado com sucesso.`);
    req.session.save(() => res.redirect(`/adm/${deleteBook.user._id}`));
    return;
}