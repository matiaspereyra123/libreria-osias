const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
let usersJSON = fs.readFileSync(usersFilePath, 'utf-8');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));  //variable repetida con la linea 27 tenian mismo nombre




const UserController = {
    login: function (req, res) {
      return  res.render('user/login',{hoja:'userStyles.css', title: "Iniciar sesión"});
    },
    register:function (req, res) {
        return res.render('user/register',{hoja:'userStyles.css', title: "Registro"});
    },
    save: function (req, res) {
        let ultimo = users.length -1;
		let idnuevo = users[ultimo].id + 1;  

        let newUser = {
            id: idnuevo, 
            email: req.body.email
        }

        let usersN 

        if (usersJSON == "") {
            usersN = []
        }
        else {
            usersN = JSON.parse(usersJSON)
        }
        usersN.push(newUser);

        let usersToJSON = JSON.stringify(usersN, null, "\t");

        fs.writeFileSync(usersFilePath, usersToJSON)

        res.redirect("/")

    },


    // agrego controlador para formulario de recuperación de contraseña
    pass: function (req, res) {
        return res.render('user/pass',{hoja:'userStyles.css', title: "Recuperar contraseña"})
    }
}

module.exports = UserController