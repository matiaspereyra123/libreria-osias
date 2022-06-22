function userLogged(req, res, next) {
	if (req.session.usuarioLogeado) {   //si en el req en session tengo a alguien redirigir al profile
		return res.redirect('/user/profile'); //si es verdadero redirect 
	}
	next(); //si es falso next
}

module.exports = userLogged;