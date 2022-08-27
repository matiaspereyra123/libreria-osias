const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");
let validations = require('../middlewares/validateCreateProduct');
let notAdmin=require('../middlewares/notAdmin');
const userNotLogged = require("../middlewares/userNotLogged");
const productController = require("../controllers/ProductController");


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
router.post("/create/",notAdmin, upload.single("imagen"),validations, productController.save);


//pruebo CRUD de editorial
router.get("/createEditorial", productController.createEditorial)
router.post("/createEditorial", productController.saveEditorial)

router.get('/edit/:id',notAdmin, productController.edit);
router.put('/edit/:id',upload.single("imagen"), productController.update);

// para deshabilitar libro
router.put("/disable/:id",notAdmin, productController.disable)
/** */
router.delete('/delete/:id',notAdmin, productController.destroy); 

router.get('/productsList',productController.list);
router.get('/search',productController.search);



module.exports = router;
