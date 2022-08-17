const path = require("path");
const { body } = require("express-validator");

const validar = [
	body('email')
		.notEmpty().withMessage('Ingresá tu correo electrónico').bail()
		.isEmail().withMessage('Debés escribir un formato de correo válido'),
	body('password').notEmpty().withMessage("Ingresá tu contraseña")
    .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
 
];

module.exports = validar;