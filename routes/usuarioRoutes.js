
const express = require("express");

const router = express.Router();

const {
    obtenerUsuarios
} = require("../controllers/usuarioController");

// Ruta para consultar todos los usuarios
router.get("/", obtenerUsuarios);

module.exports = router;
