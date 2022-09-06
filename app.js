const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const cors=require('cors');
//const bp = require('body-parser')/****** */
const userLoggedNavBar=require('./src/middlewares/userLoggedNavBar');
const app = express();
app.use(express.static('./public'));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'))

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

const usersRoutes = require("./src/routes/userRoutes")
const mainRoutes = require("./src/routes/mainRoutes")
const productRoutes = require("./src/routes/productRoutes");
const apiUsersRouter = require("./src/routes/api/users")
const apiProductsRouter = require("./src/routes/api/products")
const apiGenresRouter = require("./src/routes/api/genres");

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
