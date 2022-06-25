const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let productJSON = fs.readFileSync(productsFilePath, 'utf-8');
let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {
    home: function (req, res) {
        
        let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
     //   const secundaria = libros.filter(libro => {
       //     if (libro.categoria == "Educación secundaria") {
          //      return libro.categoria == "Educación secundaria"    
            //    }


        const secundaria = libros.filter(libro => {
            if (libro.categoria == 2) {
                return libro.categoria ==2
                //  No se puede cambiar de categoria la editar, hay que corregir este bug , el bug puede estar aca o en la vista en los OPTION
                }

        })
        
        const primaria = libros.filter(libro => {
            if (libro.categoria == 1) {
            return libro.categoria ==1
            }
     
        })

 res.render("home",{libros: libros, primaria: primaria, secundaria: secundaria, title: "Libreria Kodos",hoja:'home.css'});
    }
}



module.exports = mainController