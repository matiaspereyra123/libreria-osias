const express = require("express");


const router = express.Router()

const mainController = require("../controllers/mainController")

router.get("/", mainController.home);
router.get('/viajes', mainController.viajes);
router.get('/historieta', mainController.historieta);
router.get('/literaturaIlustrada', mainController.literatura);
router.get('/infantiles', mainController.infantiles);

module.exports = router