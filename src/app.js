const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const bp = require('body-parser')/****** */
const app = express();
app.use(express.static('./public'));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))

app.use(session({         //pasar middleware como aplicacion
	secret: "Shhh, It's a secret",
	resave: false,    // para que no haya erres de configuraciones
	saveUninitialized: false,  //
}));

app.use(cookies());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(bp.json());/****** */
//app.use(bp.urlencoded({ extended: true }))/****** */

const methodOverride =  require('method-override'); 
//*** / 
app.use(methodOverride('_method')); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const usersRoutes = require("./routes/userRoutes.js")
const mainRoutes = require("./routes/mainRoutes.js")
const productRoutes = require("./routes/productRoutes.js");

app.listen(process.env.PORT || 3030, () => {
    console.log("Sevidor corriendo en http://localhost:3030");
})
// cambio las rutas de products de acuerdo con las sugerencias del feedback
app.use('/', mainRoutes);
app.use('/user', usersRoutes);
app.use('/product', productRoutes);




