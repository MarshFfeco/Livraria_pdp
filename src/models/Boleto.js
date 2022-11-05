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
        let book = await BookModel.findOne({_id: this.idBook });

        if(!book) return this.message.push("Livro não encontrado na base de dados");

        return book;
    }

    async buscarLivros() {
        const books = await (await BookModel.find().sort({ dataLancamento: -1 }).populate("user"));

        return books;
    }

    buyOne() {
        let book = this.buscarLivro();

        if(book.quantidade || book.quantidade === null || book.quantidade > 0) this.message.push("Livro indisponível para comprar")

        if(this.message.length > 0) return;

        if(book.quantidade) {
            this.verifyUser();
            this.verifyUserGeneral();
        }

        this.verifyUserGeneral();

        if(this.message.length > 0) return;

        this.addVenda(book);

        if(this.message.length > 0) return;

        return book;
    }

    async addVenda(bookOne) {
        let book = await bookOne;
        let vendas = book.vendas;
        let estoque = book.quantidade;
        let id = book._id;

        let livro;

        if(estoque) estoque -= 1;


        if(vendas && (estoque > 0 || estoque == null )) {
            vendas += 1;

            livro = await BookModel.findByIdAndUpdate(id, { vendas: vendas, quantidade: estoque });

            if(!livro) this.message.push("Livro não disponível para comprar")

            if(this.message.length > 0) return;

            return;
        }

        livro = await BookModel.findByIdAndUpdate(id, { vendas: 1, quantidade: estoque });
        
        if(!livro) this.message.push("Livro não disponível para comprar")

        if(this.message.length > 0) return;
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