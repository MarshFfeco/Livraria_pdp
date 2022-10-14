const Home = require("../models/Home");

exports.index = async function(req, res){
    const homeCall = new Home();
    const books = await homeCall.buscarLivros();

    res.render("home", {
        title: "home",
        books: books
    });
}