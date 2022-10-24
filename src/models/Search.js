const BookSchema = require("./Adm");

const mongoose = require('mongoose');   
const BookModel = mongoose.model('Book_Register', BookSchema.BookSchema);

class Search {
    constructor(body){
        this.body = body
        this.message = [];
    }

    async buscarLivros() {
        var books = await (await BookModel.find({ titulo: { "$regex": this.body.search, "$options": "i" } }));

        if(!books.length > 0) this.message.push("Nenhum Livro Encontrado");

        if(this.body.genero !== "null") { books = this.filter(books); }

        if(!books.length > 0) this.message.push("Nenhum Livro Encontrado");

        return books;
    }

    filter(books) {
        let bookFilter = books.filter((book) => {
            if(book.generos.indexOf(this.body.genero) !== -1) return book;
        });

        return bookFilter;
    }
}

module.exports = Search;