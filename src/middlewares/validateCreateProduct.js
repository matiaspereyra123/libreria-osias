const path = require("path");
const { body } = require("express-validator");

const validar = [
  body("titulo").notEmpty().withMessage("Ingresá el título del libro")
  .isLength({min:5}).withMessage("El título debe tener al menos 5 caracteres"),
  body("paginas").notEmpty().withMessage("Ingresá la cantidad de páginas")
  .isNumeric().withMessage("Debés ingresar un número válido")
  .isLength({min:2}).withMessage("El número de páginas debe tener al menos dos cifras"),
  body("descripcion").notEmpty().withMessage("Ingresá la descripción del libro")
  .isLength({min:20}).withMessage("La descripción debe tener al menos 20 caracteres"),
  body("autor").notEmpty().withMessage("Ingresá el nombre y apellido del autor")
  .isLength({min:2}).withMessage("El autor debe tener al menos 2 caracteres"),
  //comento estas líneas porque el segundo autor, ilustrador y traductor no son obligatorios
  // body("segundoAutor").notEmpty().withMessage("Debes completar el campo SEGUNDO AUTOR")
  // .isLength({min:2}).withMessage("SEGUNDO AUTOR debe tener al menos 2 caracteres"),
  // body("ilustrador").notEmpty().withMessage("Ingresá el nombre y apellido del ilustrador")
  // .isLength({min:2}).withMessage("El nombre del ilustrador debe tener al menos 2 caracteres"),
  // body("traductor").notEmpty().withMessage("Ingresá el nombre y apellido del traductor")
  // .isLength({min:2}).withMessage("El nombre del traductor debe tener al menos 2 caracteres"),
  body("idioma").notEmpty().withMessage("Ingresá el idioma")
  .isLength({min:2}).withMessage("El idioma debe tener al menos 2 caracteres"),
  body("precio").notEmpty().withMessage("Ingresá el precio del libro")
  .isLength({min:2}).withMessage("El precio debe tener al menos 2 caracteres"),
  body("isbn").notEmpty().withMessage("Ingresá el ISBN del libro"),
  body("cantidad").notEmpty().withMessage("Ingresá la cantidad de libros"),
  body("editorial")
    .notEmpty()
    .withMessage("Ingresá la editorial del libro")
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
