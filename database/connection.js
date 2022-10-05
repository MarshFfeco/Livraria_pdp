<<<<<<< HEAD
//CHAMA O DOTENV PARA CARREGAR VARIAVEIS EMBIENTES
require("dotenv").config();

const mongoose = require('mongoose');

//PEGA NO .ENV A VARIAVEL
const url = process.env.CONNECTIOMONGODB;

//FAZ A CONECÇÃO COM O MARIADB
const mongoConection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("\nBANCO DE DADOS: Conectou com o banco de dados");
  })
  .catch(e => console.log(e));

//EXPORTA PARA QUEM QUISER
=======
//CHAMA O DOTENV PARA CARREGAR VARIAVEIS EMBIENTES
require("dotenv").config();

const mongoose = require('mongoose');

//PEGA NO .ENV A VARIAVEL
const url = process.env.CONNECTIOMONGODB;

//FAZ A CONECÇÃO COM O MARIADB
const mongoConection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("\nBANCO DE DADOS: Conectou com o banco de dados");
  })
  .catch(e => console.log(e));

//EXPORTA PARA QUEM QUISER
>>>>>>> b5630950cfbeae80faf956b9fe976685b374f77f
module.exports = mongoConection;