const express = require('express');
const app = express();
app.use(express.static('./public'));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const methodOverride =  require('method-override'); 
//*** / 
app.use(methodOverride('_method')); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const usersRoutes = require("./routes/usersRoutes.js")

const homeRoutes = require("./routes/homeRoutes.js")

const productRoutes = require("./routes/productsRoutes.js");


app.listen(3030,() =>{
    console.log("Servidor corriendo en http://localhost:3030");
});


// cambio las rutas de products de acuerdo con las sugerencias del feedback

app.use('/', homeRoutes);
app.use('/user', usersRoutes);
app.use('/products', productRoutes);

// app.use('/editProduct', productRoutes);
// app.use('editProduct/:id',productRoutes);

// app.use('/saveProduct', productRoutes);
// app.use('/createProduct', productRoutes);









/*
app.get('/register', (req,res)=>{
    res.render(__dirname + '/views/register.ejs');
});
//agrego ruta a productDetail
app.get('/productDetail', (req,res)=>{
    res.render(__dirname + '/views/productDetail.ejs');
});

//agrego ruta a recuperacionPass
app.get('/recuperacionPass', (req,res)=>{
    res.render(__dirname + '/views/recuperacionPass.ejs');
});

//agrego ruta a productCart 0
app.get('/productCart0', (req,res)=>{
    res.render(__dirname + '/views/productCart0.ejs');
});
//agrego ruta a productCart 1
app.get('/productCart1', (req,res)=>{
    res.render(__dirname + '/views/productCart1.ejs');
});
//agrego ruta a productCart 2
app.get('/productCart2', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart2.ejs');
});

//agrego ruta a productCart 3
app.get('/productCart3', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart3.ejs');
});


*/


