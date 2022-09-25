const express = require('express');
const route = express.Router();

const home = require("../src/controller/homecontroller");
const loginsignup = require("../src/controller/loginorsignup");

route.get("/", home.index);

//ROTAS DO LOGIN E CADASTRO
route.get("/LoginOrSignUp", loginsignup.index);
route.post("/registerComplete", function res(req, res){ res.send("comidinha") });
route.post("/LoginComplete", function res(req, res){ res.send("comidinha") });

module.exports = route;