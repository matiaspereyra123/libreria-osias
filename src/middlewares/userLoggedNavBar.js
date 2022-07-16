const db = require("../database/models"); 
//Dependiendo del rol de usuario oculta funcionalidades en la barra de navegacion
function userLoggedBlockNav(req,res,next){ 
    res.locals.userLogged =  false;
    let emailEnCookie = req.cookies.recordar;
    if(req.cookies.recordar || req.session.usuarioLogeado){
        if(emailEnCookie){
            let usuarioRegistrado =  db.Usuario.findOne({ where: { email: emailEnCookie} })
                .then(usuario=>{
     
      req.session.usuarioLogeado = usuario;
    }) 
    .catch((error) => {
        console.log(error);
    }) 
        }
         

 if(req.session.usuarioLogeado){
  
     res.locals.userLogged=true;
res.locals.usuarioLogeado = req.session.usuarioLogeado;



 }

    }
  
    next(); 
    
}

module.exports = userLoggedBlockNav;