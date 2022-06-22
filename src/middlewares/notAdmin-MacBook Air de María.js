const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));  
//bloquea funcionalidades de ADMIN
function notAdmin(req, res, next) {
	if (req.session.usuarioLogeado) {   //si en el req en session tengo a alguien logeado
        let usuario=req.session.usuarioLogeado;
        let usuarioRegistrado = users.find(
             (user) => user.email == usuario.email
         );  
    
         if(usuarioRegistrado.rol=="usuario"){
            return res.redirect('/'); 
         } 
    
	}else{
        return res.redirect('/');
    }
	next(); //si es falso next
}

module.exports = notAdmin;