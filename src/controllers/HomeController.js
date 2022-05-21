const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let productJSON = fs.readFileSync(productsFilePath, 'utf-8');
let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const HomeController = {
    home: function (req, res) {

        const secundaria = libros.filter(libro => {
            if (libro.categoria === "Educación secundaria") {
                return libro.categoria === "Educación secundaria"    
                }

        })
        
        const primaria = libros.filter(libro => {
            if (libro.categoria === "Educación primaria") {
            return libro.categoria === "Educación primaria"    
            }
     
        })



        return res.render("home",{libros: libros, primaria: primaria, secundaria: secundaria, title: "Libreria Kodos",hoja:'home.css'});
    }
}



module.exports = HomeController