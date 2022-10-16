const Home = require("../models/Home");

exports.index = async function(req, res){
    const homeCall = new Home();
    const books = await homeCall.buscarLivros();

    const mainSlider = [];
    let mainSliderHaveIt = [];

    for(let i = 0; mainSlider.length < 3; i++) {
        mainSlider.push(books[randomNB(books.length, mainSliderHaveIt)]);
    };


    function randomNB(maxNumber, haveIt) {
        //Generate random number
        let random = Math.floor(Math.random() * books.length);
        if(mainSlider.length > 0) {
        do {
            random = Math.floor(Math.random() * books.length);
        } while(mainSlider.includes(random))
        }
        return random;
        /*
        if(haveIt) {
            if(!haveIt.includes(random)) {
                haveIt.push(random);
                return random;
            } else {
                if(haveIt.length < (maxNumber)) {
                    return  randomNB((maxNumber, haveIt));
                } else {
                    console.log('No more numbers available.')
                    return false;
                }
            }
        }*/
    }
    res.render("home", {
        title: "home",
        books: books,
        mainSlider: mainSlider,
    });
}