import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    contrasenaHash: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ["ciudadano", "funcionario", "administrador"],
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;
