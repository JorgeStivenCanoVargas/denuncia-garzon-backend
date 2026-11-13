
const Usuario = require("../models/Usuario");

// Obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find()
            .select("-contrasenaHash");

        res.status(200).json({
            mensaje: "Usuarios encontrados correctamente",
            usuarios
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al consultar los usuarios",
            error: error.message
        });
    }
};

module.exports = {
    obtenerUsuarios
};
