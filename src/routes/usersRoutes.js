const express = require("express");
const path = require("path")
const multer = require("multer");

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

const UserController = require("../controllers/UserController")

router.get("/login", UserController.login);
router.get("/register", UserController.register);
router.post("/register", upload.single("imagen"), UserController.save)   //mismo error que en la ruta PRODUCTS 
// agrego ruta para formulario de recuperación de contraseña
router.get("/pass", UserController.pass);

// Rutas nueva edit
router.get('/edit/:id',UserController.edit);
router.put('/edit/:id',upload.single("imagen"),UserController.update);

router.delete('/delete/:id', UserController.destroy); 

module.exports = router

