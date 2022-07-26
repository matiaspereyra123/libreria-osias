const path = require("path");
const { body } = require("express-validator");

const validar = [
  body("nombre")
  .notEmpty().withMessage("Debes completar el campo NOMBRE")
  .isLength({min:2}).withMessage("El NOMBRE debe tener al menos 2 caracteres"),
  body("apellido").notEmpty().withMessage("Debes completar el campo APELLIDO")
  .isLength({min:2}).withMessage("El APELLIDO debe tener al menos 2 caracteres"),
  body("dni").notEmpty().withMessage("Debes completar el campo DNI"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
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
    body('password').notEmpty().withMessage("Debes completar el campo PASSWORD")
    .isLength({min:8}).withMessage("El PASSWORD debe tener al menos 8 caracteres"),
    body('password2').notEmpty().withMessage("Debes completar el campo PASSWORD")
    .isLength({min:8}).withMessage("El PASSWORD debe tener al menos 8 caracteres")

    .custom(async(password2,{req})=>{
        const password=req.body.password;

        if(password!=password2){
          throw new Error("Los PASSWORD deben ser iguales");
        }
    })
 

  // .isNumeric()
  // .withMessage("Debes ingresar un número válido"),
  /*  
 body('nombre').notEmpty().withMessage("Debes completar el campo de nombre"), 
 body('color').exists().withMessage("Debes completar el campo de color"), 
 body('email').notEmpty().withMessage("Debes completar el campo de email"), 
 body('edad').notEmpty().withMessage("Debes completar el campo de edad") */
];

module.exports = validar;
