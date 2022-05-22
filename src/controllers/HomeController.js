const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let productJSON = fs.readFileSync(productsFilePath, 'utf-8');
let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const HomeController = {
    home: function (req, res) {

        const secundaria = libros.filter(libro => {
            if (libro.categoria == 2) {
                return libro.categoria     
                }

        })
        
        const primaria = libros.filter(libro => {
            if (libro.categoria == 1) {
            return libro.categoria     
            }
     
        })

 res.render("home",{libros: libros, primaria: primaria, secundaria: secundaria, title: "Libreria Kodos",hoja:'home.css'});
    }
}



module.exports = HomeController