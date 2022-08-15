const db =require('../../database/models');
const sequelize = db.sequelize;
/* const { Op } = require("sequelize");
const { array } = require('../../middlewares/multerMiddleware'); **/


const genresAPIController={

    'list': (req, res) => {
        db.Genero.findAll()
        .then(genres => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: genres.length,
                    url: 'api/genres',
                    table:"Géneros"
                },
                generos: genres
            }
                res.json(respuesta);
            })
    },
    'list2': (req, res) => {
        db.Genero.findAll({

            include: [{
                association: "genero", 
              
            }
            ]})
        .then(genres => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: genres.length,
                    url: 'api/genres',
                    table:"Géneros"
                },
                generos: genres
            }
                res.json(respuesta);
            })
    },
    'list2': (req, res) => {
        db.Genero.findAll(({

            include: [{
                association: "libros", 
                // attribute: "name"
            }
            ]}))
        .then(genres => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: genres.length,
                    url: 'api/genres',
                    table:"Géneros"
                },
                data: genres
            }
                res.json(genres);
            })
    },
    

}



module.exports = genresAPIController;