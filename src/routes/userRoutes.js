const express = require("express");
const path = require("path")
const multer = require("multer");

let validations = require('../middlewares/validateCreateUser');// Requerimos el middleware.
let validationLogin=require('../middlewares/validateLoginUser');
let userLogged = require('../middlewares/userlogged');
let userNotLogged=require('../middlewares/userNotLogged');
let notAdmin=require('../middlewares/notAdmin');
let editUser=require('../middlewares/editUser');

const upload = require('../middlewares/multerMiddleware');



const router = express.Router()

const userController = require("../controllers/UserController")
router.get("/register",userLogged, userController.register);
router.post("/register",upload.single("imagen"),validations, userController.save)   
router.get("/send/:email",userController.sendEmail);
//rutas login
router.get("/login",userLogged, userController.login);
router.post("/login",validationLogin,userController.loginProcess);
router.get("/pass", userController.pass);
router.get('/logout', userController.logout);
//profile
router.get('/profile/',userNotLogged,userController.profile); 



// Rutas nueva edit
router.get('/edit/:id',editUser,userController.edit);  
router.put('/edit/:id',upload.single("imagen"),userController.update);

router.delete('/delete/:id', userController.destroy); 
router.put("/disable/:id", userController.disable);

/** */
router.get('/usersList',notAdmin,userController.list);
module.exports = router

