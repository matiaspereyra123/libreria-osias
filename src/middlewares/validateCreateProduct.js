const path = require("path");
const { body } = require("express-validator");

const validar = [
  body("titulo").notEmpty().withMessage("Debes completar el campo de TITULO"),
  body("autor").notEmpty().withMessage("Debes completar el campo AUTOR"),
  body("editorial")
    .notEmpty()
    .withMessage("Debes compeltar el campo editorial")
    .bail()
   // .isNumeric()
   // .withMessage("Debes ingresar un número válido"),
  /*  
 body('nombre').notEmpty().withMessage("Debes completar el campo de nombre"), 
 body('color').exists().withMessage("Debes completar el campo de color"), 
 body('email').notEmpty().withMessage("Debes completar el campo de email"), 
 body('edad').notEmpty().withMessage("Debes completar el campo de edad") */
];

module.exports = validar;
