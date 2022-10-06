const express = require('express');
const route = express.Router();

const home = require("../src/controller/homecontroller");
const loginorsignup = require("../src/controller/loginorsignup");
const book = require("../src/controller/bookcontroller")

/* ROTA DO INDEX */
route.get("/", home.index);
/* FIM DA ROTA DO INDEX */

/* ROTAS DO LOGIN E CADASTRO */
route.get("/LoginOrSignUp", loginorsignup.index);
route.post("/LoginOrSignUp/registerComplete", loginorsignup.register);
route.post("/LoginOrSignUp/LoginComplete", loginorsignup.login);
/* FIM DAS ROTAS DE LOGIN E CADASTRO */

/* ROTA DO LIVRO */
route.get("/book/:id", book.index);
/* FIM DA ROTA DO LIVRO  */

module.exports = route;