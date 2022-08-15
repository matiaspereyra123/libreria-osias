 const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

router.get('/',usersAPIController.list);
<<<<<<< HEAD
router.get('/detail/:id',usersAPIController.detail);
=======
>>>>>>> 844b50357fc37a64d9954bc97c59b7865fd7c04b
router.get('/search',usersAPIController.search);

module.exports = router;
/*
//Rutas
//Listado de películas
router.get('/', moviesAPIController.list);
//Detalle de una película
router.get('/:id', moviesAPIController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/recomended/:rating', moviesAPIController.recomended);
//Agregar una película
router.post('/create', moviesAPIController.create);
//Modificar una película
router.put('/update/:id', moviesAPIController.update);
//Eliminar una película
router.delete('/delete/:id', moviesAPIController.destroy);

module.exports = router; */