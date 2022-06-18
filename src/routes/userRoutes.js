const express = require("express");
const path = require("path")
const multer = require("multer");

let validations = require('../middlewares/validateCreateUser');// Requerimos el middleware.
let validationLogin=require('../middlewares/validateLoginUser');

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

//rutas login
router.get("/login", userController.login);
router.post("/login",validationLogin,userController.loginProcess);
router.get("/pass", userController.pass);

router.get("/register", userController.register);
router.post("/register",upload.single("imagen"),validations, userController.save)   


// Rutas nueva edit
router.get('/edit/:id',userController.edit);
router.put('/edit/:id',upload.single("imagen"),userController.update);

router.delete('/delete/:id', userController.destroy); 

/** */
router.get('/usersList',userController.list);
module.exports = router

