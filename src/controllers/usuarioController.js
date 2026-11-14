import Usuario from "../models/Usuario.js";

// Consultar los usuarios registrados sin mostrar el hash de la contraseña.
const obtenerUsuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find().select("-contrasenaHash");

        return res.status(200).json({
            mensaje: "Usuarios encontrados correctamente",
            usuarios
        });
    } catch (error) {
        return next(error);
    }
};

export { obtenerUsuarios };
