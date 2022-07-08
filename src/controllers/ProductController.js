const fs = require("fs");
const path = require("path");

const { validationResult } = require('express-validator'); // requerimos para poder validar errores
const db = require("../database/models");

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
				image: req.file.filename,
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
		let libros = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

		let productID = req.params.id;

		const product = libros.find((item) => item.id == req.params.id);
		res.render("products/edit", { libroEditar: product, title: libros.titulo });

		//const libroEditar = books[productID];
		// res.render("products/edit",{hoja:'productStyles.css',libroEditar:libroEditar})
	},

	update: (req, res) => {
		let libros = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

		libros.find((libro) => {
			if (libro.id == req.params.id) {
				(libro.titulo = req.body.titulo),
					(libro.autor = req.body.autor),
					(libro.descripcion = req.body.descripcion)
				if (req.file != undefined) {
					libro.imagen = req.file.filename;
				}
			}
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(libros, null, "\t"));
		//fs.readFileSync(productsFilePath,'UTF-8');

		res.redirect("/products/detail/" + req.params.id); //Funciona bien el método pero hay que volver a cargar la imagen cada vez que se edita. Buscar solución.
	},

	detail: function (req, res) {

		db.Libro.findByPk(req.params.id, {
			include: [{
				association: "genero",
				attribute: "name"
			}, 
		{
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

		db.Libro.findAll( {include: [{association: "genero", attribute: "name"}, {association: "autor", attribute: "first_name", attribute: "last_name"},{ association: "editorial", attribute: "name"}]})
        .then(function(libros){
            
            res.render("products/productsList", {libros: libros, title: "Librería Kodos"})  
        })
        .catch(function(error){
            console.log(error);

        })
	},


	// 	let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	// res.render("products/productsList",{libros: libros, title: "Lista de libros",hoja:'style.css'});
	//    },

	//** */

	destroy: (req, res) => {
		let libros = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
		//const productoToDelete=products.find(product=>product.id===parseInt(req.params.id));
		let newListProducts = libros.filter(
			(product) => product.id !== parseInt(req.params.id)
		);
		// products = newListProducts; Al comentar estea línea y pasarle con let la variable newListProducts, se arregla el bug de que no cargaban las imágenes al redirigir al Home.
		fs.writeFileSync(
			productsFilePath,
			JSON.stringify(newListProducts, null, "\t")
		);
		res.redirect("/");
	},


}

module.exports = productController;
