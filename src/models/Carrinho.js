const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    books: { type: mongoose.Schema.Types.ObjectId, ref: 'Book_Register', require: true },
    quantidade: { type: Number, require: true },
    carrinhoDe: { type: mongoose.Schema.Types.ObjectId, ref: 'Register', require: true },
});
  
const CartModel = mongoose.model('Book_AddCart', CartSchema);

class Carrinho {
    constructor(idBook, user){
        this.idBook = idBook;
        this.message = [];
        this.cart = null;
        this.user = user;
    }

    async addBook() {
        this.cleanUp();
        let isEqual = await this.isEqual(); 

        if(this.message.length > 0) return;

        if(!isEqual) { 
            return this.cart = await CartModel.create(this.idBook);
        }

        return this.addMore(isEqual.quantidade)
    }

    async deleteBook(id) {
        if(typeof id !== 'string') return;

        this.cart = await CartModel.findOneAndDelete({ books: id });

        return this.cart;
      };

    async addMore(quantidade) {
        const book = await this.buscarLivro(this.idBook.books);

        if(this.message.length > 0) return;

        const maxQuantidade = book.books.quantidade;

        quantidade += 1;

        if(quantidade > maxQuantidade) { 
            this.message.push("Quantidade maior que a de estoque");
        }

        if(this.message.length > 0) return;

        return this.cart = await CartModel.findOneAndUpdate({ books: this.idBook.books } , { quantidade: quantidade }, { new: true });
    }

    async buscarLivro(id) {
        let book = await CartModel.findOne({ books: id }).populate("books")

        if(!book) { 
            this.message.push("Nenhum livro encontrado");
            return
        }

        if(!book.books.quantidade) {
            this.message.push("Não é possível comprar mais que um Ebook");
            return
        }

        return book;
    }

    async isEqual() {
        return this.cart = await CartModel.findOne({ books: this.idBook.books });
    }

    async buscarLivros() {
        const books = await CartModel.find().populate("books");

        if(!books) return this.message.push("Nenhum livro encontrado");

        this.cart = books.filter(book => {
            return book.carrinhoDe == this.user._id; 
        });

        return;
    }

    cleanUp() {
        this.idBook = {
            books: this.idBook,
            carrinhoDe: this.user,
            quantidade: 1,
        };
    }
}

module.exports = Carrinho;