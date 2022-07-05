const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");
let validations = require('../middlewares/validateCreateProduct');
let notAdmin=require('../middlewares/notAdmin');
const userNotLogged = require("../middlewares/userNotLogged");
const productController = require("../controllers/productController");


const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, path.join(__dirname, "../../public/images/products"));
    },
    filename:  (req, file, cb) =>{
      let imageName=Date.now()+path.extname(file.originalname);
      cb(null,imageName);
    }
  });
  
const upload = multer({storage})

router.get("/detail/:id", productController.detail);
router.get("/cart/",userNotLogged, productController.cart); 

router.get("/create/",notAdmin, productController.create);
router.post("/create/", upload.single("imagen"),validations, productController.save);

//pruebo CRUD de autor
router.post("/createAutor", productController.saveAutor)

router.get('/edit/:id',notAdmin, productController.edit);
router.put('/edit/:id',upload.single("imagen"), productController.update);
/** */
router.delete('/delete/:id', productController.destroy); 

router.get('/productsList',productController.list);

module.exports = router;
