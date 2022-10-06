const session = require("express-session");
const mongoStore = require("connect-mongo");

const sessionOptions = session({
    secret: 'LivrariaSaberCatSecret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 6, 
        httpOnly: true
    },
    store: mongoStore.create({ mongoUrl: process.env.CONNECTIOMONGODB})
});

module.exports = sessionOptions;