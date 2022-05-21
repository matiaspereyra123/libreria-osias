const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let productJSON = fs.readFileSync(productsFilePath, 'utf-8');
let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const ProductController = {

    
    cart: function (req, res) {
        return res.render('products/cart', {hoja:'productStyles.css', title: "Mis libros", libros: libros});
     },
    
    create: function (req, res) {

       return res.render('products/create',{hoja:'productStyles.css', title: "Crear producto"});
    },

  

    save: (req, res) => {

		// let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let ultimo = libros.length -1;
		let idnuevo = libros[ultimo].id + 1;  
			
		let newProduct = {
			id: idnuevo,
			titulo: req.body.titulo,
			autor: req.body.autor,
            editorial: req.body.editorial,
            isbn: req.body.isbn,
            precio: req.body.precio,
			categoria: req.body.categoria,
			descripcion: req.body.descripcion,
            cantidad: req.body.cantidad,
            paginas: req.body.paginas,
			imagen: req.file.filename
		}
		// Tengo que guardar esta info en algún lado
		
		// Primero leer lo que ya había en el archivo json
		// let productJSON = fs.readFileSync(productsFilePath, {encoding: "utf-8"});

		let productos
		
		if (productJSON =="") {
			productos = [];			
		}
		else {
			productos = JSON.parse(productJSON)
		}
		productos.push(newProduct);

		let productosJSON =  JSON.stringify(productos, null, "\t");

		fs.writeFileSync(productsFilePath, productosJSON)

		res.redirect('/');


       
    },

    edit: function(req,res){
            let productID= req.params.id;

    
                const libroEditar = books[productID];
            res.render("products/edit",{hoja:'productStyles.css',libroEditar:libroEditar});
    },

    detail: function(req,res) {
		let nombreTitulo;
        let libro = libros.find(libro=>{
            if (libro.isbn == req.params.isbn){
				nombreTitulo = req.params.titulo;
			}
        })
        res.render("products/detail", {libro: libro, title: nombreTitulo})
    }

}

module.exports = ProductController;