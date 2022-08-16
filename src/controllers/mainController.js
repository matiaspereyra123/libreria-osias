const db = require("../database/models")


const mainController = {
    
    home: (req, res)=> {

        db.Libro.findAll({include: [{association: "genero", attribute: "name"},{ association: "editorial", attribute: "name"}]},
        )
        .then(function(libros){
            
            res.render("home", {libros: libros, title: "Osias. Libros ilustrados"})  
        })
        .catch(function(error){
            console.log(error);

        })
    },
    viajes: (req, res)=>{
        db.Libro.findAll({include: [{association: "genero", attribute: "name"},{ association: "editorial", attribute: "name"}]},
        )
        .then(function(libros){
            
            res.render("viajes", {libros: libros, title: "Libros de viajes"})  
        })
        .catch(function(error){
            console.log(error);

        })

    },

    historieta: (req, res)=>{
        db.Libro.findAll({include: [{association: "genero", attribute: "name"},{ association: "editorial", attribute: "name"}]},
        )
        .then(function(libros){
            
            res.render("novelaGrafica", {libros: libros, title: "Novela gráfica & Historieta"})  
        })
        .catch(function(error){
            console.log(error);

        })

    },

    literatura: (req, res)=>{
        db.Libro.findAll({include: [{association: "genero", attribute: "name"},{ association: "editorial", attribute: "name"}]},
        )
        .then(function(libros){
            
            res.render("literaturaIlustrada", {libros: libros, title: "Literatura ilustrada"})  
        })
        .catch(function(error){
            console.log(error);

        })

    },
    infantiles: (req, res)=>{
        db.Libro.findAll({include: [{association: "genero", attribute: "name"},{ association: "editorial", attribute: "name"}]},
        )
        .then(function(libros){
            
            res.render("infantiles", {libros: libros, title: "Infantiles"})  
        })
        .catch(function(error){
            console.log(error);

        })

    },
    contact: (req, res)=> {
            
        res.render("contact",{title:"contacto"});
   
    },


}


    module.exports = mainController