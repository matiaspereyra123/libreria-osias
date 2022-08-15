const express = require('express');
const router = express.Router();
const genresAPIController = require('../../controllers/api/genresAPIController');

router.get('/',genresAPIController.list2);



module.exports = router;