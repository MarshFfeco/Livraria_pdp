const mongoose = require('mongoose');
const BookSchema = require("./Adm");
const BookModel = mongoose.model('Book_Register', BookSchema.BookSchema);

class Boleto {
    constructor(idBook, user){
        this.idBook = idBook;
        this.message = [];
        this.user = user;
    }

    async buscarLivro() {
        let book = await BookModel.findById(this.idBook);

        if(!book) return this.message.push("Livro não encontrado na base de dados");

        return book;
    }

    buyOne() {
        let book = this.buscarLivro();

        if(book.quantidade) {
            this.verifyUser();
        }

        this.verifyUserGeneral();

        if(this.message.length > 0) return;

        return book;
    }

    verifyUser() {
        if(!('endereco' in this.user) || !this.user.endereco) this.message.push("Complete o perfil para continuar sua compra"); 
        return;
    }

    verifyUserGeneral(){
        if(!('cpf' in this.user) || !this.user.cpf) this.message.push("Complete o perfil para continuar sua compra"); 
        return
    }
}

module.exports = Boleto;