const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    books: { type: mongoose.Schema.Types.ObjectId, ref: 'Book_Register' },
    carrinhoDe: { type: mongoose.Schema.Types.ObjectId, ref: 'Register' },
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

        if(this.message.length > 0) return;

        this.cart = await CartModel.create(this.idBook);
    }

    async buscarLivros(id) {
        const books = await (await CartModel.find().sort({ dataLancamento: -1 }).populate("books"));
        const result = books.filter(book => {
            return book.carrinhoDe == id; 
        });

        return result;
    }

    cleanUp() {
        this.idBook = {
            books: this.idBook,
            carrinhoDe: this.user,
        }
    }
}

module.exports = Carrinho;