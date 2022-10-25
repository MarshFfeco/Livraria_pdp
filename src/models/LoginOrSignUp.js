const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");

const BookSchema = require("./Adm");
const BookModel = mongoose.model('Book_Register', BookSchema.BookSchema);

const RegisterSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
});
  
const RegisterModel = mongoose.model('Register', RegisterSchema);

module.exports = RegisterModel;

class LoginOrSignUp {
    constructor(body) {
        this.body = body,
        this.message = []
        this.user = null;
    }

    async register() {
        this.valida();

        if(this.message.length > 0) return;

        await this.userExists();

        if(this.message.length > 0) return;

        const salt = bcrypt.genSaltSync();

        this.body.senha = bcrypt.hashSync(this.body.senha, salt);
        this.user = await RegisterModel.create(this.body);
    }

    async login() {
        this.valida();

        if(this.message.length > 0) return;

        this.user = await RegisterModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.message.push("Usuário não Existe!");
            return;
        }

        if(!bcrypt.compareSync(this.body.senha, this.user.senha)) {
            this.message.push("Email ou senha inválidos!");
            this.user = null;
            return;
        }
    }

    async userExists() {
       this.user = await RegisterModel.findOne({ email: this.body.email });

       if(this.user) this.message.push("Usuário já existe");
    }

    async userEdit() {
        console.log(this.body);
    }

    async userDelete() {
        var books = await BookModel.find().populate("user");

        if(!books) return this.message.push("Erro ao tentar Deletar usuário");

        books = books.filter(books => { return books.user._id == this.body ? books._id : null });

        for(let i = 0; i < books.length; i++) {
            await BookModel.findOneAndDelete(books[i]._id);
        }

        await RegisterModel.findOneAndDelete({ _id: this.body });
    
        return;
    }

    valida() {
        this.cleanUp();

        if(!validator.isEmail(this.body.email)){
            this.message.push("Email inválido");
        }
    }

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== "string") {
                this.body[key] = "";
            }
        }

        this.body = {
            nome: this.body.nome,
            email: this.body.email,
            senha: this.body.senha
        }
    }
}

module.exports = LoginOrSignUp;


