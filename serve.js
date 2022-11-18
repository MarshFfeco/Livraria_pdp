require("dotenv").config;

var cookieParser = require('cookie-parser');
const express = require("express");
const app = express();

app.use(cookieParser());


const mariaDB = require("./database/connection");

const flash = require("connect-flash");

/* CONFIG DA SESSÃO */
const session = require("express-session");
const mongoStore = require("connect-mongo");

const sessionOptions = session({
    secret: 'LivrariaSaberCatSecret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 6, 
        httpOnly: false
    },
    store: mongoStore.create({ mongoUrl: process.env.CONNECTIOMONGODB})
});
/* FIM DO CONFIG DA SESSÃO */

const routes = require('./routes/routes');
const path = require('path');
const csrf = require('csurf');
const { sessionUser, rotasExist, checkCsrfError, csrfMiddleware, setCookie, allCookie } = require("./src/middlewares/middleware.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

//UTILIZANDO AS SESSÕES
app.use(sessionOptions);
app.use(flash());

//DEIXA USAR O EJS COMO RENDER
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

app.use(sessionUser);

app.use(csrfMiddleware);
app.use(checkCsrfError);

app.use(setCookie);
app.use(allCookie);

//PEGA AS ROTAS DA PASTA ROUTES
app.use(routes);

//VERIFICA SE A ROTA EXISTE
app.use(rotasExist);

mariaDB.then(result => {
    app.listen(3000, () => {
        console.log('\nAcessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    })
})

