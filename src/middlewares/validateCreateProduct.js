const path = require("path");
const { body } = require("express-validator");

const validar = [
  body("titulo").notEmpty().withMessage("Debes completar el campo TíTULO")
  .isLength({min:5}).withMessage("El TITULO debe tener al menos 5 caracteres"),
  body("paginas").notEmpty().withMessage("Debes completar el campo CANTIDAD DE PAGINAS")
  .isNumeric().withMessage("Debes ingresar un número válido")
  .isLength({min:2}).withMessage("CANTIDAD DE PAGINAS Deben tener al menos 2 caracteres"),
  body("descripcion").notEmpty().withMessage("Debes completar el campo DESCRIPCION")
  .isLength({min:20}).withMessage("El campo DESCRIPCION debe tener al menos 20 caracteres"),
  body("autor").notEmpty().withMessage("Debes completar el campo AUTOR")
  .isLength({min:2}).withMessage("AUTOR debe tener al menos 2 caracteres"),
  body("segundoAutor").notEmpty().withMessage("Debes completar el campo SEGUNDO AUTOR")
  .isLength({min:2}).withMessage("SEGUNDO AUTOR debe tener al menos 2 caracteres"),
  body("ilustrador").notEmpty().withMessage("Debes completar el campo ILUSTRADOR")
  .isLength({min:2}).withMessage("ILUSTRADOR debe tener al menos 2 caracteres"),
  body("traductor").notEmpty().withMessage("Debes completar el campo TRADUCTOR")
  .isLength({min:2}).withMessage("TRADUCTO debe tener al menos 2 caracteres"),
  body("idioma").notEmpty().withMessage("Debes completar el campo IDIOMA")
  .isLength({min:2}).withMessage("IDIOMA debe tener al menos 2 caracteres"),
  body("precio").notEmpty().withMessage("Debes completar el campo PRECIO")
  .isLength({min:2}).withMessage("PRECIO debe tener al menos 2 caracteres"),
  body("isbn").notEmpty().withMessage("Debes completar el campo ISBN"),
  
  body("cantidad").notEmpty().withMessage("Debes completar el campo CANTIDAD"),
  body("editorial")
    .notEmpty()
    .withMessage("Debes compeltar el campo EDITORIAL")
    .bail(), 
    body('imagen').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', 'jpeg', '.png', '.gif'];
  
      if (file) {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }
  
      return true;
    }), 
   // .isNumeric()
   // .withMessage("Debes ingresar un número válido"),
  /*  
 body('nombre').notEmpty().withMessage("Debes completar el campo de nombre"), 
 body('color').exists().withMessage("Debes completar el campo de color"), 
 body('email').notEmpty().withMessage("Debes completar el campo de email"), 
 body('edad').notEmpty().withMessage("Debes completar el campo de edad") */
];

module.exports = validar;
