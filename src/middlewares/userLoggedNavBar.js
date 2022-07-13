const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); 
const db = require("../database/models"); 
//Dependiendo del rol de usuario oculta funcionalidades en la barra de navegacion
function userLoggedBlockNav(req,res,next){ 
    
    res.locals.userLogged =  false;
    let emailEnCookie = req.cookies.recordar;
    if(emailEnCookie!=undefined){
  
 const usuarioRegistrado =  db.Usuario.findOne({ where: { email: emailEnCookie} })

         if(usuarioRegistrado){
    req.session.usuarioLogeado = usuarioRegistrado;
}

if(req.session.usuarioLogeado){
    res.locals.userLogged=true;
    res.locals.usuarioLogeado = req.session.usuarioLogeado;

}  

    }
 
  next(); 
    
      
//si en el req en session tengo a alguien redirigir al profile
	
 
         //  


 /*    let usuarioRegistrado = users.find(
        (user) => user.email == emailEnCookie
    );   */

 


}

module.exports = userLoggedBlockNav;