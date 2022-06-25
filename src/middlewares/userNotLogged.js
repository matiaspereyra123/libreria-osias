function userNotLogged(req, res, next) {//middleware de autenticacion
	if (!req.session.usuarioLogeado) {    //si no tengo a nadie en session
		return res.redirect('/user/login');     // No podra acceder al PROFILE, será enviado al login
	}
	next(); //si existe ealguien en session continua
}

module.exports = userNotLogged;