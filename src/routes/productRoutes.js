const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");
let validations = require('../middlewares/validateCreateProduct');
let block=require('../middlewares/notAdmin');
const userNotLogged = require("../middlewares/userNotLogged");
const productController = require("../controllers/productController");


const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, path.join(__dirname, "../../public/images/products"));
    },
    filename:  (req, file, cb) =>{
      let imageName=Date.now()+path.extname(file.originalname); m
      cb(null,imageName);
    }
  });
  
const upload = multer({storage})

router.get("/detail/:id", productController.detail);
router.get("/cart/",userNotLogged, productController.cart); 

router.get("/create/",block, productController.create);
router.post("/create/", upload.single("imagen"),validations, productController.save); 

router.get('/edit/:id',block, productController.edit);
router.put('/edit/:id',upload.single("imagen"), productController.update);
/** */
router.delete('/delete/:id', productController.destroy); 

router.get('/productsList',productController.list);

module.exports = router;
