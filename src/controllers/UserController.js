const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
let usersJSON = fs.readFileSync(usersFilePath, 'utf-8');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));  //variable repetida con la linea 27 tenian mismo nombre




const UserController = {
    login: function (req, res) {
      return  res.render('user/login',{hoja:'userStyles.css', title: "Iniciar sesión"});
    },
    register:function (req, res) {
        return res.render('user/register',{hoja:'userStyles.css', title: "Registro"});
    },
    save: function (req, res) {
       // let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); 
        let ultimo = users.length -1;
		let idnuevo = users[ultimo].id + 1;  

        let newUser = {
            id: idnuevo,  
            nombre: req.body.usuario, 
            usuario: req.body.usuario,
            email: req.body.email,
            nacimiento: req.body.nacimiento,
            domicilio: req.body.domicilio,
            password:req.body.password
       
        
        }

        let usersN 

        if (usersJSON == "") {
            usersN = []
        }
        else {
            usersN = JSON.parse(usersJSON)
        }
        usersN.push(newUser);

        let usersToJSON = JSON.stringify(usersN, null, "\t");

        fs.writeFileSync(usersFilePath, usersToJSON)

        res.redirect('/user/login/')

    },
    /* */
    edit: function(req,res){
		let usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

			let usuarioID=req.params.id

			const editUsuario= usuarios.find(usuario=>usuario.id==req.params.id);
			res.render('user/edit',{usuarioEditar:editUsuario ,title: editUsuario.nombre});

	


			
              //const libroEditar = books[productID];
           // res.render("products/edit",{hoja:'productStyles.css',libroEditar:libroEditar})

    },

    update: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); 
	
		
		usuarios.find(usuario=>{
			if(usuario.id==req.params.id){
				usuario.nombre=req.body.nombre,
				usuario.usuario=req.body.usuario,
                usuario.email=req.body.email,
                usuario.nacimiento=req.body.nacimiento,
                usuario.domicilio=req.body.domicilio,
            
                usuario.passowrd=req.body.password
			  	if(req.file!=undefined){
				usuario.imagen=req.file.filename;
			  }
			
			}
		
		})	
		fs.writeFileSync(usersFilePath, JSON.stringify(usuarios,null,'\t'));
		//fs.readFileSync(productsFilePath,'UTF-8');


		res.redirect('/user/login/');     //Funciona bien el método pero hay que volver a cargar la imagen cada vez que se edita. Buscar solución. 
	

	},


    // agrego controlador para formulario de recuperación de contraseña
    pass: function (req, res) {
        return res.render('user/pass',{hoja:'userStyles.css', title: "Recuperar contraseña"})
    },

    destroy : (req, res) => {
		let usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

	
		//const productoToDelete=products.find(product=>product.id===parseInt(req.params.id));
		let newListUsers=usuarios.filter(usurio=>usuario.id!==parseInt(req.params.id));
		// products = newListProducts; Al comentar estea línea y pasarle con let la variable newListProducts, se arregla el bug de que no cargaban las imágenes al redirigir al Home. 
		fs.writeFileSync(usersFilePath,JSON.stringify(newListUsers,null,'\t'));
		res.redirect('/');
	}

}

module.exports = UserController