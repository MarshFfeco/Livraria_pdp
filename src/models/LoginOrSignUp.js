const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const CPF = require('cpf');

const BookSchema = require("./Adm");
const BookModel = mongoose.model('Book_Register', BookSchema.BookSchema);

const RegisterSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    cpf: { type: String },
    adm: { type: Boolean, default: false },
    endereco: { type: String },
    telefone: { type: Number },
    nascimento: { type: Date },
    coockieAccept: { Boolean },
});
  
const RegisterModel = mongoose.model('Register', RegisterSchema);

class LoginOrSignUp {
    constructor(body, adm) {
        this.body = body;
        this.message = [];
        this.user = null;
        this.adm = adm;
    }

    async users(id) {
        var users = await RegisterModel.find().sort({ adm: -1 });
 
        return users;
     }

     async aceptCoockie(id) {
        this.user = await RegisterModel.findByIdAndUpdate(id, { coockieAccept: true }, { new: true });

        if(!this.user) this.message.push("Erro ao tentar aceitar o contrato");

        return;
     }

    async removeADM(id){
        var remove = await RegisterModel.findByIdAndUpdate(id, { adm: false });

        if(!remove) this.message.push("Erro ao remove acesso");

        return;
    }

    async becomeADM(id){
        var remove = await RegisterModel.findByIdAndUpdate(id, { adm: true });

        if(!remove) this.message.push("Erro ao entregar acesso");

        return;
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

        if(/*this.body.senha != this.user.senha*/!bcrypt.compareSync(this.body.senha, this.user.senha)) {
            this.message.push("Email ou senha inválidos!");
            this.user = null;
            return;
        }
    }

    async userExists() {
       this.user = await RegisterModel.findOne({ email: this.body.email });

       if(this.user) this.message.push("Usuário já existe");
    }

    async userEdit(id) {
        this.cleanUp();

        if(this.body.cpf) {
            let validaCPF = this.validaCPF();

            if(!validaCPF) {
                this.message.push("CPF inválido ou Inexistente!")
                return;
            }
        }

        const salt = bcrypt.genSaltSync();

        this.body.senha = bcrypt.hashSync(this.body.senha, salt);

        this.user = await RegisterModel.findByIdAndUpdate(id, this.body, { new: true });
    }

    validaCPF() {
        this.body.cpf = CPF.format(this.body.cpf);
        return CPF.isValid(this.body.cpf)
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
        this.body = {
            nome: this.body.nome,
            email: this.body.email,
            senha: this.body.senha,
            cpf: this.body.cpf,
            adm: this.adm,
            endereco: this.body.endereco,
            telefone: this.body.telefone,
            nascimento: this.body.nascimento,
        }
    }
}

module.exports = LoginOrSignUp;


