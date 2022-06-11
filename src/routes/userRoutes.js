const express = require("express");
const path = require("path")
const multer = require("multer");

let validations = require('../middlewares/validateCreateUser');// Requerimos el middleware.

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

router.get("/login", userController.login);
router.get("/register", userController.register);
router.post("/register",validations, upload.single("imagen"), userController.save)   //mismo error que en la ruta PRODUCTS 
// agrego ruta para formulario de recuperación de contraseña
router.get("/pass", userController.pass);

// Rutas nueva edit
router.get('/edit/:id',userController.edit);
router.put('/edit/:id',upload.single("imagen"),userController.update);

router.delete('/delete/:id', userController.destroy); 

/** */
router.get('/usersList',userController.list);
module.exports = router

