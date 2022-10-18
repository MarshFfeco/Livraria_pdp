const BookSchema = require("./Adm");

const mongoose = require('mongoose');   
const BookModel = mongoose.model('Book_Register', BookSchema.BookSchema);

class Home {
    constructor(){
        this.message = [];
    }

    async buscarLivros() {
        const books = await (await BookModel.find());

        return books;
    }

    async buscarLivro(book_id) {
        try {
            const book = await (await BookModel.findById(book_id));
    
            return book;
        } catch (error) {
            this.message.push("Livro não encontrado");
            return;
        }
    }

    randomNB(rp, maxRp) {
        let values = []
        let isDiferrentValues;
        let repet = 0;

        do{ 
            values = [];
            for(let i = 0; i < rp; i++) {
                let random = Math.floor(Math.random() * maxRp);

                values.push(random);
            }
            isDiferrentValues = this.isDiferrent(values);
            repet++;

            if(repet > maxRp) {
                isDiferrentValues = true;
            }
        } while(!isDiferrentValues) 

        return values;
    }

    isDiferrent(array) {
        var filtrado = array.filter(function(elem, pos, arr) {
            return arr.indexOf(elem) == pos;
        });
    
        return filtrado.length === 1 || filtrado.length === array.length; 
    }
}

module.exports = Home;