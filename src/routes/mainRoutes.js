const express = require("express");


const router = express.Router()

const mainController = require("../controllers/mainController")

router.get("/", mainController.home);
router.get('/viajes', mainController.viajes);

module.exports = router