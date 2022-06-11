const express = require("express");
const router = express.Router();

let validations = require('../middlewares/validateCreateProduct');// Requerimos el middleware.

const productController = require("../controllers/productController");

const path = require("path")
const multer = require("multer");

const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, path.join(__dirname, "../../public/images/products"));
    },
    filename:  (req, file, cb) =>{
      let imageName=Date.now()+path.extname(file.originalname); //intentar guardar imagen con el nombre del titulo+id
      cb(null,imageName);
    }
  });
  
const upload = multer({storage})
//get all products


router.get("/detail/:id", productController.detail);
router.get("/cart/", productController.cart); 

router.get("/create/", productController.create);
router.post("/create/",validations, upload.single("imagen"), productController.save); //faltaba CREATE en la ruta.  (  el index pertenece al controlador HOME CONTROLLER, no iba a redirigir)

router.get('/edit/:id', productController.edit);
router.put('/edit/:id',upload.single("imagen"), productController.update);
/** */
router.delete('/delete/:id', productController.destroy); 

router.get('/productsList',productController.list);

module.exports = router;
