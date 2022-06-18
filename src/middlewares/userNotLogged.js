function userNotLogged(req, res, next) {//middleware de authentication
	if (!req.session.usuarioLogeado) {    //si no tengo a nadie en session
		return res.redirect('/user/login');     //redirigir al login  
	}
	next(); //si existe ealguien en session continua
}

module.exports = userNotLogged;