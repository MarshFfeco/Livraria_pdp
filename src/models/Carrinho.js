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
            this.cart = await CartModel.create(this.idBook);
        } else {
            this.addMore(isEqual.quantidade)
        }
    }

    async addMore(quantidade) {
        try {
            quantidade += 1;
            this.cart = await CartModel.findOneAndUpdate({ books: this.idBook.books } , { quantidade: quantidade }, { new: true });
            return;
        } catch (error) {
            this.message.push("Erro ao tentar adicionar mais uma unidade no Carrinho");
            return;
        }
    }

    async isEqual() {
        return this.cart = await CartModel.findOne({ books: this.idBook.books });
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
            quantidade: 1,
        };
    }
}

module.exports = Carrinho;