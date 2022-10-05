const express = require('express');
const route = express.Router();

const home = require("../src/controller/homecontroller");
const loginsignup = require("../src/controller/loginorsignup");
const book = require("../src/controller/bookcontroller")

/* ROTA DO INDEX */
route.get("/", home.index);
/* FIM DA ROTA DO INDEX */

/* ROTAS DO LOGIN E CADASTRO */
route.get("/LoginOrSignUp", loginsignup.index);
route.post("/registerComplete", function res(req, res){ 
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    res.send(`Nome: ${nome}\n, Email: ${email}\n, Senha ${senha}`);
 });
route.post("/LoginComplete", function res(req, res){ res.send("comidinha") });
/* FIM DAS ROTAS DE LOGIN E CADASTRO */

/* ROTA DO LIVRO */
route.get("/book/:id", book.index);
/* FIM DA ROTA DO LIVRO  */

module.exports = route;