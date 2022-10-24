const Home = require("../models/Home");

exports.index = async function(req, res){
    const homeCall = new Home();
    const books = await homeCall.buscarLivros();

    const mainSlider = [];
    let mainSliderContent = homeCall.randomNB(3, books.length);
    mainSliderContent.forEach(values => mainSlider.push(books[values]));

    res.render("home", {
        title: "home",
        books: books,
        mainSlider: mainSlider,
    });
}