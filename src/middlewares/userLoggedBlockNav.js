
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));  

function userLoggedBlockNav(req,res,next){
   res.locals.userLogged =  false;
    let emailEnCookie = req.cookies.recordar;

   let usuarioRegistrado = users.find(
        (user) => user.email == emailEnCookie
    );    

    if(usuarioRegistrado){
        req.session.usuarioLogeado = usuarioRegistrado;
    }


    if(req.session.usuarioLogeado){
        res.locals.userLogged=true;
        res.locals.usuarioLogeado = req.session.usuarioLogeado;
    } 





    next();
}

module.exports = userLoggedBlockNav;