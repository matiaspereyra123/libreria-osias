const path = require("path");
const { body } = require("express-validator");

const validar = [
  body("nombre")
  .notEmpty().withMessage("Debés completar el campo NOMBRE")
  .isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
  body("apellido").notEmpty().withMessage("Debés completar el campo apellido")
  .isLength({min:2}).withMessage("El apellido debe tener al menos 2 caracteres"),
  body("dni").notEmpty().withMessage("Debés completar el campo DNI"),
  body("email")
    .notEmpty()
    .withMessage("Ingresá tu correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debés escribir un formato de correo válido"),
    body('imagen').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  
      if (file) {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }
  
      return true;
    }),   
    //pasarle las reglas de la expresión que usamos en la validación del front
    body('password').notEmpty().withMessage("Ingresá tu contraseña")
    .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    body('password2').notEmpty().withMessage("Ingresá tu contraseña")
    .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres")

    .custom(async(password2,{req})=>{
        const password=req.body.password;

        if(password!=password2){
          throw new Error("Las contraseñas deben ser iguales");
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
