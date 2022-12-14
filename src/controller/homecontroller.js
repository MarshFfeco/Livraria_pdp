const Home = require("../models/Home");

exports.index = async function(req, res){
    const homeCall = new Home();
    const books = await homeCall.buscarLivros();
    const acaoAventura = await homeCall.filter(books, ["acao", "aventura"]);

    const mainSlider = [];
    let mainSliderContent = homeCall.randomNB(3, books.length);
    mainSliderContent.forEach(values => mainSlider.push(books[values]));

    return res.render("home", {
        title: "home",
        acaoAventura: acaoAventura,
        terrorDrama: books,
        mainSlider: mainSlider,
        user: req.session.user
    });
}