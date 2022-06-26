const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let productJSON = fs.readFileSync(productsFilePath, 'utf-8');
let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {
    
    home: function (req, res) {
        let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const historieta = libros.filter(libro => {
            if (libro.genre == "Historieta") {
                return libro.genre == "Historieta"
            }
        });

        const literatura = libros.filter(libro => {
            if (libro.genre == "Literatura ilustrada") {
                return libro.genre == "Literatura ilustrada"
            }
        });

        const infantiles = libros.filter(libro => {
            if (libro.genre == "Infantiles") {
                return libro.genre == "Infantiles"
            }
        });


        res.render("home", { libros: libros, historieta: historieta, literatura: literatura, infantiles: infantiles, title: "Libreria Kodos" })
    },
}


    module.exports = mainController