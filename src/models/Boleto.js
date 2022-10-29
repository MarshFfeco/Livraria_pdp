const mongoose = require('mongoose');
const BookSchema = require("./Adm");
const BookModel = mongoose.model('Book_Register', BookSchema.BookSchema);

class Boleto {
    constructor(idBook){
        this.idBook = idBook;
        this.message = [];
    }

    async buscarLivro() {
        const book = await BookModel.findById(this.idBook);

        if(!book) return this.message.push("Livro não encontrado na base de dados");

        return book;
    }
}

module.exports = Boleto;