const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const cors=require('cors');
//const bp = require('body-parser')/****** */
const userLoggedNavBar=require('./middlewares/userLoggedNavBar');
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
app.use(cors());
app.use(cookies());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(userLoggedNavBar);
//app.use(bp.json());/****** */
//app.use(bp.urlencoded({ extended: true }))/****** */

const methodOverride =  require('method-override'); 
//*** / 
app.use(methodOverride('_method')); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const usersRoutes = require("./routes/userRoutes.js")
const mainRoutes = require("./routes/mainRoutes.js")
const productRoutes = require("./routes/productRoutes.js");
const apiUsersRouter = require("./routes/api/users")
const apiProductsRouter = require("./routes/api/products")
const apiGenresRouter = require("./routes/api/genres");

// cambio las rutas de products de acuerdo con las sugerencias del feedback
app.use('/', mainRoutes);
app.use('/user', usersRoutes);
app.use('/product', productRoutes);
app.use('/api/users',apiUsersRouter);
app.use('/api/products',apiProductsRouter);
app.use('/api/genres',apiGenresRouter);
app.listen(process.env.PORT || 3030, () => {
    console.log("Sevidor corriendo en http://localhost:3030");
})
