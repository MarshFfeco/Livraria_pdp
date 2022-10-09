const mongoose = require('mongoose');   
const RegisterModel = require("./LoginOrSignUp");

const BookSchema = new mongoose.Schema({
    titulo: { type: String, require: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: String, require: true },
    urlImage: { type: String, required: true },
    dataLancamento: { type: Date, required: true },
    descricaoProduto: { type: String, require: true },
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

    async teste() {
        await BookModel.findOne({_id: '634350fea64f92298406e9d1' }).populate('user')
        .exec(function(err, post) {
            if(err) return console.log("deu ruim");
            console.log(post.user)
        });
    }

    async register() {
        this.valida();

        if(this.message.length > 0) return;

        this.book = await BookModel.create(this.body);
    }

    valida() {
        this.cleanUp();

        for(const key in this.body) {
            if(!this.body[key]) this.message.push(`${this.body[key]} é um campo obrigatório!`);
        }
    }

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== "string") {
                this.body[key] = "";
            }
        }

        this.body = {
            titulo: this.body.titulo,
            autor: this.body.autor,
            editora: this.body.editora,
            preco: this.body.preco,
            urlImage: this.body.urlImage,
            dataLancamento: this.body. dataLancamento,
            descricaoProduto: this.body.descricaoProduto,
            detalheProduto: this.body.detalheProduto,
            user: this.user,
        }
    }
}

module.exports = Adm;