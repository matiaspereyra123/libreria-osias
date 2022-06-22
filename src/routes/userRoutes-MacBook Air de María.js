const express = require("express");
const path = require("path")
const multer = require("multer");

let validations = require('../middlewares/validateCreateUser');// Requerimos el middleware.
let validationLogin=require('../middlewares/validateLoginUser');
let userLogged = require('../middlewares/userLogged');
let userNotLogged=require('../middlewares/userNotLogged');
let notAdmin=require('../middlewares/notAdmin');
let editUser=require('../middlewares/editUser');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/images/users"))
    },
    filename: function (req, file, cb) {
      let imageName=Date.now()+path.extname(file.originalname);
      cb(null,imageName);
    }
  })
  
const upload = multer({ storage: storage })


const router = express.Router()

const userController = require("../controllers/userController")
router.get("/register",userLogged, userController.register);
router.post("/register",upload.single("imagen"),validations, userController.save)   
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

/** */
router.get('/usersList',notAdmin,userController.list);
module.exports = router

