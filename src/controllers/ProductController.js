const { validationResult } = require('express-validator'); // requerimos para poder validar errores

const { body } = require("express-validator");
const { Op } = require("sequelize");
const db = require("../database/models");


const productController = {
	
	cart: function (req, res) {
		
		db.Libro.findAll()
		.then(function(libros){
            
            res.render("products/cart", {libros: libros, title: "Mis libros"}) 
	
		})
	},

	create: function (req, res) {
		
		
			let pedidoGeneros = db.Genero.findAll()
			let pedidoEditoriales = db.Editorial.findAll()
		
			Promise.all([, pedidoGeneros, pedidoEditoriales])
			.then(function([autores, generos, editoriales]){
			res.render("products/create", {generos: generos, editoriales: editoriales, title: "Crear producto"});
		})
		
	}, 

	createEditorial: (req, res) => {
		res.render("products/createEditorial", {title: "Crear editorial"})

	},

	
	saveEditorial: (req,res) => {
		
		db.Editorial.create({
			name: req.body.nombre,
			address: req.body.direccion,
			email: req.body.email,
			phone_number: req.body.telefono

		})

		.then(() => {
			res.redirect('/product/create')})


	},

	save: (req, res) => {
		
		let errors = validationResult(req); //guarda validacion errores

		console.log(errors);

		
		if (errors.isEmpty()) {
			//bloque que valida si errors esta vacio
			
			db.Libro.create({
				title: req.body.titulo,
				author :req.body.autor,
				second_author: req.body.segundoAutor,
				illustrator: req.body.ilustrador,
				translator: req.body.traductor,
				genre_id: req.body.genero,
				publisher_id: req.body.editorial,
				language: req.body.idioma,
				isbn: req.body.isbn,
				price: req.body.precio,
				publication_date: req.body.fecha_publicacion,
				stock: req.body.cantidad,
				pages: req.body.paginas,
				image: req.file ? req.file.filename: "book.jpeg",
				description: req.body.descripcion
	
			}
			)
			.then(() => {
				res.redirect('/product/productsList')})
			
				.catch(function(error){
					console.log(error)
				})
			}
		else {

			
			let pedidoGeneros = db.Genero.findAll()
			let pedidoEditoriales = db.Editorial.findAll()
		
			Promise.all([pedidoGeneros, pedidoEditoriales])
			.then(function([generos, editoriales]) {
			res.render('products/create',{errors:errors.mapped(), generos:generos, editoriales:editoriales, old:req.body, title:"Crear Producto"})  //enviamos a la vista array con errores , y old envia datos validos para no volver a completarlos
		})
		}
	},

	edit: function (req, res) {
        

		let pedidoLibro = db.Libro.findByPk(req.params.id, 
			{include: [{
				association: "genero", attribute: "name"
			}, { 
				association: "editorial", 
				attribute: "name"
			}]}
		)

		

		let pedidoEditoriales = db.Editorial.findAll()

		let pedidoGeneros = db.Genero.findAll()

		Promise.all([pedidoLibro, pedidoGeneros, pedidoEditoriales])
		.then(function ([libroEditar, generos, editoriales]) {
			res.render("products/edit", { libroEditar:libroEditar, generos:generos, editoriales:editoriales, title: libroEditar.title })
		})
	},

	update: (req, res) => {

		const imagenLibro = db.Libro.findOne({ where: { id:req.params.id } });



		db.Libro.update({
				title: req.body.titulo,
				author: req.body.autor,
				second_author: req.body.segundoAutor,
				illustrator: req.body.ilustrador,
				translator: req.body.traductor,
				genre_id: req.body.genero,
				publisher_id: req.body.editorial,
				language: req.body.idioma,
				isbn: req.body.isbn,
				price: req.body.precio,
				publication_date: req.body.fecha_publicacion,
				stock: req.body.cantidad,
				pages: req.body.paginas,
				description: req.body.descripcion,
				image: req.file ? req.file.filename: imagenLibro.image

		
		}, {
			where: {
				id: req.params.id
			}
		})
		.then(() => {
			res.redirect('/product/productsList')})
		
			.catch(function(error){
				console.log(error)
			})
	},

	detail: function (req, res) {

		db.Libro.findByPk(req.params.id, {
			include: [{

				association: "genero",
				attribute: "name"

			}

		]
		})
		.then(function(libro){
			res.render("products/detail", {libro: libro, title: libro.title})
		})
		.catch(function(error){
			console.log(error)
		})

	},
	list:(req,res)=>{

		db.Libro.findAll({

			include: [{
				association: "genero", 
				attribute: "name"
			},{ 
				association: "editorial", 
				attribute: "name"
			}
			]})
        .then(function(libros){
            
            res.render("products/productsList", {libros: libros, title: "Librería Kodos"})  
        })
        .catch(function(error){
            console.log(error);

        })
	},

	disable: (req, res) => {
		db.Libro.update({
			active: 0 
		}, {
			where: {
				id: req.params.id
			}
		})
		.then(() => {
			res.redirect('/product/productsList')})
		
			.catch(function(error){
				console.log(error)
			})

	},

	destroy: (req, res) => {
		db.Libro.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(() => {
			res.redirect('/product/productsList')})
		
			.catch(function(error){
				console.log(error)
			})
	},

	search:(req,res)=>{
	

		db.Libro.findAll({
			where:{
					
						[Op.or]:[
								{
									title:{	[Op.like]:  '%'+req.query.search +'%'}
								}, 
							 	{
									author:{[Op.like]: '%'+ req.query.search +'%'}
								}  
						] 
					
			
			},
						include: [{
							association: "genero", 
							attribute: "name"
						},{ 
							association: "editorial", 
							attribute: "name"
						}
						]})
					.then(function(libros){
						
						res.render("products/search", {libros: libros, title: "Osías"})  
					})
					.catch(function(error){
						console.log(error);
			
					})
},

}

module.exports = productController;




  
/*  Foo.findAll({
  where: {
    {
      [Op.or]: [
        {
          title: {
            [Op.like]: 'Boat%'
          }
        },
        {
          description: {
            [Op.like]: '%boat%'
          }
        }
      ]
    }
    // title LIKE 'Boat%' OR description LIKE '%boat%'
  }
}); */