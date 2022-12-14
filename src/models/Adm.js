const mongoose = require('mongoose');  

exports.BookSchema = BookSchema = new mongoose.Schema ({
    titulo: { type: String, require: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    quantidade: { type: Number },
    vendas: { type: Number },
    preco: { type: Number, require: true },
    capa: { type: String,  required: true },
    dataLancamento: { type: Date, required: true },
    generos: [{ type: String, required: true }],
    resumo: { type: String, require: true },
    detalheProduto: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Register' },
});
  
const BookModel = mongoose.model('Book_Register', BookSchema);

class Adm {
    constructor(body, user){
        this.body = body;
        this.message = [];
        this.book = null;
        this.user = user;
    }

    async register() {
        this.valida();

        if(this.message.length > 0) return;

        await this.bookExist();

        if(this.message.length > 0) return;

        this.book = await BookModel.create(this.body);
    }

    async bookExist() {
        this.book = await BookModel.findOne({ titulo: this.body.titulo });

        if(this.book) this.message.push(`Esse livro já Existe.`);
    }

    async buscarLivros(id) {
        const books = await (await BookModel.find().sort({ dataLancamento: -1 }).populate("user"));
        const result = books.filter(book => {
            return book.user._id == id; 
        });

        return result;
    }

    async buscarLivro(book_id, id) {
        try {
            const book = await (await BookModel.findById(book_id).sort({ dataLancamento: -1 }).populate("user"));

            if(book.user._id == id) {
                return book;
            }
    
            this.message.push("Livro não encontrado");
    
            return;
        } catch (error) {
            this.message.push("Livro não encontrado");
            return;
        }
    }

    async edit(id) {
        if(typeof id !== 'string') return;

        if(this.message.length > 0) return;

        this.cleanUpEdit();

        this.book = await BookModel.findByIdAndUpdate(id, this.body, { new: true });

        if(!this.book)  this.message.push("Erro ao tentar editar Livro");
    }

    delete = async function(id) {
        if(typeof id !== 'string') return;

        const book = await BookModel.findOneAndDelete({_id: id});

        return book;
      };

    valida() {
        this.cleanUp();

        /*for(const key in this.body) {
            if(key == this.body.quantidade) return;
            if(!this.body[key]) this.message.push(`${this.body[key]} é um campo obrigatório!`);
        }*/
    }

    cleanUp() {
        this.body = {
            titulo: this.body.titulo,
            autor: this.body.autor,
            editora: this.body.editora,
            quantidade: this.body.quantidade,
            vendas: 0,
            preco: this.body.preco,
            capa: this.body.capa,
            dataLancamento: this.body.dataLancamento,
            generos: this.body.genero,
            resumo: this.body.resumo,
            detalheProduto: this.body.detalheProduto,
            user: this.user,
        }
    }

    cleanUpEdit() {
        this.body = {
            titulo: this.body.titulo,
            autor: this.body.autor,
            editora: this.body.editora,
            quantidade: this.body.quantidade,
            preco: this.body.preco,
            capa: this.body.capa,
            dataLancamento: this.body.dataLancamento,
            generos: this.body.genero,
            resumo: this.body.resumo,
            detalheProduto: this.body.detalheProduto,
            user: this.user,
        }
    }
}

module.exports = Adm