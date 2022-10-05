require("dotenv").config;

const express = require("express");
const app = express();

const mariaDB = require("./database/connection");

const { rotas } = require("./src/middlewares/middleware.js");

const routes = require('./routes/routes');

const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

//DEIXA USAR O EJS COMO RENDER
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//PEGA AS ROTAS DA PASTA ROUTES
app.use(routes);

//VERIFICA SE A ROTA EXISTE
app.use(rotas);

mariaDB.then(result => {
    app.listen(3000, () => {
        console.log('\nAcessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    })
})

