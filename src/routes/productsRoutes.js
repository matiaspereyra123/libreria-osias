const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

const path = require("path")
const multer = require("multer");

const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, path.join(__dirname, "../../public/images"));
    },
    filename:  (req, file, cb) =>{
      let imageName=Date.now()+path.extname(file.originalname); //intentar guardar imagen con el nombre del titulo+id
      cb(null,imageName);
    }
  });
  
const upload = multer({storage})
//get all products


router.get("/detail/:isbn", ProductController.detail);
router.get("/cart/", ProductController.cart);

router.get("/create/", ProductController.create);
router.post("/create/", upload.single("imagen"), ProductController.save); //faltaba CREATE en la ruta.  (  el index pertenece al controlador HOME CONTROLLER, no iba a redirigir)

router.get('/edit/:id', ProductController.edit);


module.exports = router;
