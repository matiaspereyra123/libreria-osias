const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
// let productJSON = fs.readFileSync(productsFilePath, 'utf-8');
// let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const ProductController = {

    
    cart: function (req, res) {
		let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        return res.render('products/cart', {hoja:'productStyles.css', title: "Mis libros", libros: libros});
     },
    
    create: function (req, res) {

       return res.render('products/create',{hoja:'productStyles.css', title: "Crear producto"});
    },

  

    save: (req, res) => {

		let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
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
		let productJSON = fs.readFileSync(productsFilePath, {encoding: "utf-8"});

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

		res.redirect("/"); //Funciona bien cuando se selecciona la categoría Primaria, pero al seleccionar Secundaria hay que actualizar para que carguen las imágenes en el Home. Pendiente para solucionar. 

       
    },

    edit: function(req,res){
		let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

			let productID	=req.params.id

			const product = libros.find(item=>item.id==req.params.id);
			res.render('products/edit',{libroEditar:product ,title: libros.titulo});

	


			
              //const libroEditar = books[productID];
           // res.render("products/edit",{hoja:'productStyles.css',libroEditar:libroEditar})

    },

	update: (req, res) => {
		let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		libros.find(libro=>{
			if(libro.id==req.params.id){
				libro.titulo=req.body.titulo,
				libro.autor=req.body.autor,
				libro.descripcion=req.body.descripcion,
				libro.imagen=req.file.filename;
			}
		
		})	
		fs.writeFileSync(productsFilePath, JSON.stringify(libros,null,'\t'));
		//fs.readFileSync(productsFilePath,'UTF-8');

	const product = libros.find(item=>item.id==req.params.id);
		res.redirect('/products/detail/'+req.params.id);     //Funciona bien el método pero hay que volver a cargar la imagen cada vez que se edita. Buscar solución. 
	

	},



    detail: function(req,res) {
		let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

	
	//	let nombreTitulo;
      //  let libro = libros.find(libro=>{
         //   if (libro.id == req.params.id){
		//		nombreTitulo = req.params.titulo;
		//	}
      //  })
    //    res.render("products/detail", {libro: libro, title: nombreTitulo})


//jungle.find(el => el.threat == 5));
		
	const product = libros.find(item=>item.id==req.params.id);

	

	
	res.render('products/detail',{libroEditar: product, libros: libros, title: libros.titulo}); // No actualiza la variable, hay que parar el servidor y volver a correrlo para actualizar variable y  ver la vista 
	//otra opcion redigir al home como el destroy 


    },
		
	
	//** */

	destroy : (req, res) => {
		let libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

	
		//const productoToDelete=products.find(product=>product.id===parseInt(req.params.id));
		let newListProducts=libros.filter(product=>product.id!==parseInt(req.params.id));
		// products = newListProducts; Al comentar estea línea y pasarle con let la variable newListProducts, se arregla el bug de que no cargaban las imágenes al redirigir al Home. 
		fs.writeFileSync(productsFilePath,JSON.stringify(newListProducts,null,'\t'));
		res.redirect('/');
	}

}

module.exports = ProductController;