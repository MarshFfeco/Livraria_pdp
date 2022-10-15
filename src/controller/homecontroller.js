const Home = require("../models/Home");

exports.index = async function(req, res){
    const homeCall = new Home();
    const books = await homeCall.buscarLivros();
    const mainSlider = [];

    for(let i = 0; i < 3; i++) {
        mainSlider.push(
            books[Math.floor(Math.random() * (books.length - 1 + 0) + 1)]
            );
    };

    res.render("home", {
        title: "home",
        books: books,
        mainSlider: mainSlider,
    });
}