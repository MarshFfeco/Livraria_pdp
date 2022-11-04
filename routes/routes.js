const express = require('express');
const route = express.Router();

const home = require("../src/controller/homecontroller");
const contrato = require("../src/controller/contratocontroller");
const loginorsignup = require("../src/controller/loginorsignupcontroller");
const book = require("../src/controller/bookcontroller")
const adm = require("../src/controller/admcontroller");
const carrinho = require("../src/controller/carrinhocontroller");
const search = require("../src/controller/searchcontroller");
const boleto = require("../src/controller/controllerBoleto");

const { loginRequired, coockieAccept } = require("../src/middlewares/middleware")

/* ROTA DO INDEX */
route.get("/", home.index);
route.get("/accept", loginorsignup.accept);
/* FIM DA ROTA DO INDEX */

/* ROTA DO CONTRATO */
route.get("/contrato", contrato.index);
/* FIM DA ROTA DO CONTRATO */

/* ROTAS DO LOGIN E CADASTRO */
route.get("/LoginOrSignUp", loginorsignup.index);
route.post("/LoginOrSignUp/registerComplete", loginorsignup.register);
route.post("/LoginOrSignUp/LoginComplete", loginorsignup.login);
route.get("/Logout", loginorsignup.logout);
/* FIM DAS ROTAS DE LOGIN E CADASTRO */

/* ROTA DO LIVRO */
route.get("/book/:id", book.index);
/* FIM DA ROTA DO LIVRO  */

/* ROTAS DO ADM */
route.get("/adm/:id", coockieAccept, loginRequired, adm.index);
route.post("/adm/:id/RegisterBookComplete", coockieAccept, loginRequired, adm.register);
route.post("/adm/:id/EditBookComplete", coockieAccept, loginRequired, adm.editBook);
route.get("/adm/:id/Edit", coockieAccept, loginRequired, adm.edit);
route.get("/adm/:id/Delete", coockieAccept, loginRequired, adm.delete);

route.get("/adm/:id/editUser", coockieAccept, loginRequired, loginorsignup.editUser);
route.post("/adm/:id/editUserComplete", coockieAccept, loginRequired, loginorsignup.editUserComplete);
route.get("/adm/:id/deleteUser", coockieAccept, loginRequired, loginorsignup.deleteUser);

route.get("/adm/:id/removeADM", coockieAccept, loginRequired, adm.removeADM);
route.get("/adm/:id/becomeADM", coockieAccept, loginRequired, adm.becomeADM);
/* FIM DAS ROTAS DO ADM */

/* ROTAS DO CARRINHO */
route.get("/carrinho", coockieAccept, loginRequired, carrinho.index);
route.get("/carrinho/:id", coockieAccept, loginRequired, carrinho.addBook);
route.get("/carrinho/:id/delete", coockieAccept, loginRequired, carrinho.delete);
/* FIM DAS ROTAS DO CARRINHO */

/* ROTAS DE PESQUISA  */
route.get("/search", search.index);
/*  FIMDAS ROTAS DE PESQUISA */

/* ROTA DO BOLETO */
route.get("/comprar/:name/:id", loginRequired, boleto.boleto);
route.get("/comprar/carrinho/", loginRequired, boleto.boletoAll);
route.get("/adm/:id/relatorioSimpleRe", loginRequired, boleto.relatorioSimpleRe);
route.get("/adm/:id/relatorioSimpleRe/dowload", loginRequired, boleto.relatorioSimpleReDo);
/* FIM DA ROTA DO BOLETO */

module.exports = route;