const express = require('express');
const route = express.Router();

const home = require("../src/controller/homecontroller");
const loginorsignup = require("../src/controller/loginorsignupcontroller");
const book = require("../src/controller/bookcontroller")
const adm = require("../src/controller/admcontroller");

const { loginRequired } = require("../src/middlewares/middleware")

/* ROTA DO INDEX */
route.get("/", home.index);
/* FIM DA ROTA DO INDEX */

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
route.get("/adm/:id", loginRequired, adm.index);
route.post("/adm/:id/RegisterBookComplete", loginRequired, adm.register);
route.post("/adm/:id/EditBookComplete", loginRequired, adm.editBook);
route.get("/adm/:id/Edit", loginRequired, adm.edit);
route.get("/adm/:id/Delete", loginRequired, adm.delete);
/* FIM DAS ROTAS DO ADM */

module.exports = route;