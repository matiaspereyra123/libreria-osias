const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

router.get('/',productsAPIController.list);
<<<<<<< HEAD
router.get('/detail/:id',productsAPIController.detail);
=======
>>>>>>> 844b50357fc37a64d9954bc97c59b7865fd7c04b
/* router.get('/search',productsAPIController.search); */

module.exports = router;