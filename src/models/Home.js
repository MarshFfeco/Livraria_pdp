const BookSchema = require("./Adm");

const mongoose = require('mongoose');   
const BookModel = mongoose.model('Book_Register', BookSchema.BookSchema);

class Home {
    constructor(){
        this.message = [];
    }

    async buscarLivros() {
        const books = await (await BookModel.find());

        return books;
    }

    async buscarLivro(book_id) {
        try {
            const book = await (await BookModel.findById(book_id));
    
            return book;
        } catch (error) {
            this.message.push("Livro não encontrado");
            return;
        }
    }
}

module.exports = Home;