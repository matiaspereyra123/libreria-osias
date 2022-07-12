const db = require("../database/models")


const mainController = {
    
    home: (req, res)=> {

        db.Libro.findAll({include: [{association: "genero", attribute: "name"},{ association: "editorial", attribute: "name"}]},
        )
        .then(function(libros){
            
            res.render("home", {libros: libros, title: "Librería Kodos"})  
        })
        .catch(function(error){
            console.log(error);

        })
    }

}


    module.exports = mainController