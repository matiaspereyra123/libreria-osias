const fs = require("fs");
const path = require("path");

const { validationResult } = require('express-validator'); // requerimos para poder validar errores
const db = require("../database/models");
const { body } = require("express-validator");

const productsFilePath = path.join(__dirname, "../data/products.json");
const carritoFilePath = path.join(__dirname, "../data/cart.json");
// let productJSON = fs.readFileSync(productsFilePath, 'utf-8');
// let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
	cart: function (req, res) {
		let librosCarrito = JSON.parse(fs.readFileSync(carritoFilePath, "utf-8"));
		return res.render("products/cart", {
			title: "Mis libros",
			carrito: librosCarrito,
		});
	},

	create: function (req, res) {
		
			let pedidoAutores = db.Autor.findAll()
			let pedidoGeneros = db.Genero.findAll()
			let pedidoEditoriales = db.Editorial.findAll()
		
			Promise.all([pedidoAutores, pedidoGeneros, pedidoEditoriales])
			.then(function([autores, generos, editoriales]){
			res.render("products/create", {autores: autores, generos: generos, editoriales: editoriales, title: "Crear producto"});
		})
		
	}, 
	createAutor: (req, res) => {
		res.render("products/createAutor", {title: "Crear autor"})

	},

	//pruebo CRUD autor
	saveAutor: (req,res) => {
		
		db.Autor.create({
			first_name: req.body.nombre,
			last_name: req.body.apellido
		})

		.then(() => {
			res.redirect('/product/create')})


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
				author_id: req.body.autor,
				second_author_id: req.body.segundoAutor,
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
				image: req.file ? req.file.filename: "book.png",
				description: req.body.descripcion
	
			})
			.then(() => {
				res.redirect('/product/productsList')})
			
				.catch(function(error){
					console.log(error)
				})
			}
		else {

			let pedidoAutores = db.Autor.findAll()
			let pedidoGeneros = db.Genero.findAll()
			let pedidoEditoriales = db.Editorial.findAll()
		
			Promise.all([pedidoAutores, pedidoGeneros, pedidoEditoriales])
			.then(function([autores, generos, editoriales]) {
			res.render('products/create',{errors:errors.mapped(), autores:autores, generos:generos, editoriales:editoriales, old:req.body, title:"Crear Producto"})  //enviamos a la vista array con errores , y old envia datos validos para no volver a completarlos
		})
		}
	},

	edit: function (req, res) {
        

		let pedidoLibro = db.Libro.findByPk(req.params.id, 
			{include: [{
				association: "genero", attribute: "name"
			}, {
				association: "autor", 
				attribute: "first_name", 
				attribute: "last_name"
			},{
				association: "segundoAutor", 
				attribute: "first_name", 
				attribute: "last_name"
			},{ 
				association: "editorial", 
				attribute: "name"
			}]}
		)

		let pedidoAutores = db.Autor.findAll()

		let pedidoEditoriales = db.Editorial.findAll()

		let pedidoGeneros = db.Genero.findAll()

		Promise.all([pedidoLibro, pedidoAutores, pedidoGeneros, pedidoEditoriales])
		.then(function ([libroEditar, autores, generos, editoriales]) {
			res.render("products/edit", { libroEditar:libroEditar, autores:autores, generos:generos, editoriales:editoriales, title: libroEditar.title })
		})
	},

	update: (req, res) => {

		const imagenLibro = db.Libro.findOne({ where: { id:req.params.id } });



		db.Libro.update({
				title: req.body.titulo,
				author_id: req.body.autor,
				second_author_id: req.body.segundoAutor,
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

			}, {

				association: "autor",
				attribute: "first_name",
				attribute: "last_name"
		}]
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
			}, {
				association: "autor", 
				attribute: "first_name", 
				attribute: "last_name"
			}, {
				association: "segundoAutor", 
				attribute: "first_name", 
				attribute: "last_name"
			},
				{ association: "editorial", 
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
	}


}

module.exports = productController;
