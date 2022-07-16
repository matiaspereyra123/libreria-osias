const db = require("../database/models");

const bcryptjs = require("bcryptjs");


const { validationResult } = require("express-validator"); // requerimos para poder validar errores
const { syncBuiltinESMExports } = require("module");


const userController = {
    login: function (req, res) {
        return res.render("user/login", {
            hoja: "userStyles.css",
            title: "Iniciar sesión",
        });
    },
    loginProcess: async(req,res)=> {


        

        let errors = validationResult(req); //guarda validacion errores
         const usuarioRegistrado = await db.Usuario.findOne({ where: { email: req.body.email} })
         try{
 
             if(usuarioRegistrado===null){
                 res.render("user/register", {
                     errors: errors.mapped(),
                     old: req.body,
                     title: "Crear Usuario",
                 }); //enviamos a la vista array con errores , y old envia datos validos para no volver a completarlos
             }else{
                 if (errors.isEmpty()) {
                     //bloque que valida si errors esta vacio
                                  let passwordOk = bcryptjs.compareSync(req.body.password, usuarioRegistrado.password);
                                 if(passwordOk){
                                     req.session.usuarioLogeado=usuarioRegistrado
                                     if(req.body.recordar){
                                  res.cookie('recordar',usuarioRegistrado.email,{maxAge:(60000)*2});
 
                                  //res.cookie('testing','probandocookie',{maxAge:(60000)*2});
                                 }
                                     //delete usuarioRegistrado.password;
                                    // return res.send(req.session.usuarioLogeado);
                                 //  return res.send(req.cookies);
                                     console.log("**PROBANDO*")
                                     console.log(req.session.usuarioLogeado);
                                     console.log("**FIN*")
                                         res.redirect('profile')
                             }else{
                                     res.render("user/login", {errors:{datos:{ msg: "USUARIO O PASSWORD NO VALIDO" }}, title: "Login Usuario",
                                 });
                                 }
                 } else {
                     res.render("user/register", {errors:{email:{ msg: "ESTE EMAIL YA SE ENCUENTRA REGISTRADO" }}, old: req.body, title: "Crear Usuario"});
                 }
             }
 
 
         }catch(error){
             console.log(error)
 
         }
 
 
  
       
         },

    profile: async (req, res) => {
            res.render("user/profile", { usuarioLogeado: req.session.usuarioLogeado, title: "Perfil de usuario", });
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
    save: async (req, res) => {
        let errors = validationResult(req); //guarda validacion errores

        console.log(errors);

        const project = await db.Usuario.findOne({ where: { email: req.body.email } });
        if (project === null) {

            if (errors.isEmpty()) {
                //bloque que valida si errors esta vacio

                db.Usuario.create({
                    first_name: req.body.nombre,
                    last_name: req.body.apellido,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    dni: req.body.dni,
                    adress: req.body.adress,
                    birth_date: req.body.birth_date,
                    image: req.file ? req.file.filename : "avatar.jpg",


                })
                    .then(() => {
                        res.redirect("user/profile");
                    })

                    .catch(function (error) {
                        console.log(error)
                    })
            } else {
                res.render("user/register", {
                    errors: errors.mapped(),
                    old: req.body,
                    title: "Crear Usuario",
                }); //enviamos a la vista array con errores , y old envia datos validos para no volver a completarlos
            }


        } else {
            res.render("user/register", { errors: { email: { msg: "ESTE EMAIL YA SE ENCUENTRA REGISTRADO" } }, old: req.body, title: "Crear Usuario" });
        }



    },

    edit: function (req, res) {
        db.Usuario.findByPk(req.params.id)
            .then(function (usuario) {
                res.render('user/edit', { usuarioEditar: usuario, title: "Editar usuario" });
            })

    },

    update: (req, res) => {





        if (req.body.password == req.body.password2) {

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


                .then(() => {
                    res.redirect('/')
                })

                .catch(function (error) {
                    console.log(error)
                })



        } else {
            res.render("user/edit", {
                errors: { datos: { msg: "Los password deben ser iguales" } }, usuarioEditar: req.body, title: "Editar Usuario",
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

        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/user/usersList')
            })

            .catch(function (error) {
                console.log(error)
            })



    },
    disable: (req, res) => {
        db.Usuario.update({
            active: 0
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/user/usersList')
            })

            .catch(function (error) {
                console.log(error)
            })

    },

    list: (req, res) => {
        // let usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        db.Usuario.findAll()
            .then(function (usuarios) {
                res.render("user/usersList", { usuarios: usuarios, title: "Lista de Usuarios" });
            })

    },
};

module.exports = userController;