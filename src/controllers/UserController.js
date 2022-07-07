const db = require("../database/models");

const bcryptjs = require("bcryptjs");

const fs = require("fs");
const path = require("path");
const { validationResult} = require("express-validator"); // requerimos para poder validar errores

const usersFilePath = path.join(__dirname, "../data/users.json");
let usersJSON = fs.readFileSync(usersFilePath, "utf-8");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); //variable repetida con la linea 27 tenian mismo nombre

const userController = {
    login: function (req, res) {
        return res.render("user/login", {
            hoja: "userStyles.css",
            title: "Iniciar sesión",
        });
    },
    loginProcess: function(req,res) {
        let errors = validationResult(req); //guarda validacion errores
                  const usuarioRegistrado = users.find(
                    (user) => user.email == req.body.email
                ); 
            if(errors.isEmpty()){ 
                if(usuarioRegistrado){ 
                
                         let passwordOk = bcryptjs.compareSync(req.body.password, usuarioRegistrado.password); 
                        if(passwordOk){  
                            if(req.body.recordar){
                         res.cookie('recordar',usuarioRegistrado.email,{maxAge:(60000)*2});      
                        }           
                            //delete usuarioRegistrado.password;  
                       
                            req.session.usuarioLogeado=usuarioRegistrado;
                         
                            res.redirect("profile");
                    }else{
                            res.render("user/login", {errors:{datos:{ msg: "USUARIO O PASSWORD NO VALIDO" }}, title: "Login Usuario",
                        });
                        }
                }else{
                    res.render("user/login", {errors:{datos:{ msg: "USUARIO O PASSWORD NO VALIDO" }}, title: "Login Usuario",
                });
                }
            }else{
                res.render("user/login", {
                    errors: errors.mapped(),
                    old: req.body,
                    title: "Login Usuario",
                });

            }
        },

        profile: (req, res) => {
            return res.render("user/profile", {usuarioLogeado:req.session.usuarioLogeado,
                hoja: "styles.css",
                title: "Perfil de usuario",
            });      
        },
        logout: function (req, res) {
            res.clearCookie('recordar'); //destruir cookie para el logout 
            req.session.destroy(); //destruir  session
            return res.redirect('/');//redirigir al home
        },
    /* */
   

    register: function (req, res) {
        return res.render("user/register", {
            hoja: "userStyles.css",
            title: "Registro",
        });
    },
    save: function (req, res) {
        // let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let errors = validationResult(req); //guarda validacion errores
        let ultimo = users.length - 1;
        let idnuevo = users[ultimo].id + 1;

        const usuarioRegistrado = users.find(
            (user) => user.email == req.body.email
        );
     
        if (usuarioRegistrado) {
            res.render("user/register", {errors:{email:{ msg: "ESTE EMAIL YA SE ENCUENTRA REGISTRADO" }}, old: req.body, title: "Crear Usuario",
            });
        } else {
            if (errors.isEmpty()) {
                //preguntamos si errores esta vacio, entonces guarda usuario nuevo.
                if(req.body.password==req.body.password2){
                    
                    db.Usuario.create({
                        first_name: req.body.nombre,
                        last_name: req.body.apellido,
                        email: req.body.email,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        dni: req.body.dni,
                        address: req.body.domicilio,
                        birth_date: req.body.nacimiento,
                        image: req.file ? req.file.filename : "avatar.jpg",
                        isAdmin: 0,
                    })
                    
                   
                    .then(() => {
                        res.redirect('/user/login')})

                }else{
                    res.render("user/register", {errors:{datos:{ msg: "Los password deben ser iguales" }},old:req.body, title: "Registro de Usuario",
                        });
                }
          
            } else {
                //si errores no esta vacio envia errores a la vista
                res.render("user/register", {
                    errors: errors.mapped(),
                    old: req.body,
                    title: "Crear Usuario",
                }); //enviamos a la vista array con errores , y old envia datos validos para no volver a completarlos
            }
        }
    },
    /* */
    edit: function (req, res) {
        let usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        const editUsuario = usuarios.find((usuario) => usuario.id == req.params.id);
        res.render("user/edit", {
            usuarioEditar: editUsuario,
            title: "Editar Usuario",
        });
    },

    update: (req, res) => {
        
        
        // let usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
     
        if(req.body.password==req.body.password2){
           
            db.Usuario.update({
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                dni: req.body.dni,
                address: req.body.domicilio,
                birth_date: req.body.nacimiento,
                image: req.file ? req.file.filename : "avatar.jpg",
                isAdmin: 0,
            }, {
                where: {
                    id: req.params.id
                }
                

            })
            .then(()=> {
                return res.redirect('/movies')})            
            .catch(error => res.send(error))
    

            

            
//             usuarios.find((usuario) => {
//             if (usuario.id == req.params.id) {
//                     usuario.nombre = req.body.nombre,
//                     usuario.usuario = req.body.usuario,
//                     usuario.email = req.body.email,
//                     usuario.nacimiento = req.body.nacimiento,
//                     usuario.domicilio = req.body.domicilio,
//                     usuario.password = bcryptjs.hashSync(req.body.password, 10),
//                     usuario.imagen= req.file ? req.file.filename : "avatar.jpg"
             
//             }
//         });
// fs.writeFileSync(usersFilePath, JSON.stringify(usuarios, null, "\t"));
        //fs.readFileSync(productsFilePath,'UTF-8');
        res.redirect("/user/profile/"); //Funciona bien el método pero hay que volver a cargar la imagen cada vez que se edita. Buscar solución.
        
     }else{
        res.render("user/edit", {errors:{datos:{ msg: "Los password deben ser iguales" }},usuarioEditar:req.body, title: "Editar Usuario",
    });
     }
      
        
    },

    // agrego controlador para formulario de recuperación de contraseña
    pass: function (req, res) {
        return res.render("user/pass", {
            hoja: "userStyles.css",
            title: "Recuperar contraseña",
        });
    },

    destroy: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        //const productoToDelete=products.find(product=>product.id===parseInt(req.params.id));
        let newListUsers = usuarios.filter(
            (usuario) => usuario.id !== parseInt(req.params.id)
        );
        // products = newListProducts; Al comentar estea línea y pasarle con let la variable newListProducts, se arregla el bug de que no cargaban las imágenes al redirigir al Home.
        fs.writeFileSync(usersFilePath, JSON.stringify(newListUsers, null, "\t"));
        res.redirect("/");
    },

    list: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        res.render("user/usersList", {usuarios: usuarios,title: "Lista de Usuarios",hoja: "style.css"});
    },
};

module.exports = userController;
