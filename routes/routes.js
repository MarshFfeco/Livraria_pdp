const express = require('express');
const route = express.Router();

const index = require("../src/controller/indecontroller");
const loginsignup = require("../src/controller/loginorsignup");

route.get("/", index.index);

//ROTAS DO LOGIN E CADASTRO
route.get("/LoginOrSignUp", loginsignup.index);

module.exports = route;