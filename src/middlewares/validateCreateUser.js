const path = require("path");
const { body } = require("express-validator");

const validar = [
  body("nombre").notEmpty().withMessage("Debes completar el campo NOMBRE"),
  body("apellido").notEmpty().withMessage("Debes completar el campo APELLIDO"),
  body("usuario").notEmpty().withMessage("Debes completar el campo USUARIO"),
  body("dni").notEmpty().withMessage("Debes completar el campo DNI"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),

  // .isNumeric()
  // .withMessage("Debes ingresar un número válido"),
  /*  
 body('nombre').notEmpty().withMessage("Debes completar el campo de nombre"), 
 body('color').exists().withMessage("Debes completar el campo de color"), 
 body('email').notEmpty().withMessage("Debes completar el campo de email"), 
 body('edad').notEmpty().withMessage("Debes completar el campo de edad") */
];

module.exports = validar;
