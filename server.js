
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const conectarDB = require("./config/database");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Rutas de usuarios
app.use("/api/usuarios", usuarioRoutes);

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "Backend de Denuncia Garzon funcionando"
    });
});


// Verificar estado del servidor y MongoDB
app.get("/api/health", (req, res) => {
    const conectado = mongoose.connection.readyState === 1;

    res.status(conectado ? 200 : 503).json({
        estado: conectado ? "OK" : "ERROR",
        servidor: "Activo",
        baseDatos: conectado ? "Conectada" : "Desconectada"
    });
});

// Iniciar servidor
const iniciarServidor = async () => {
    try {
        await conectarDB();

        app.listen(process.env.PORT, () => {
            console.log(
                `Servidor funcionando en http://localhost:${process.env.PORT}`
            );
        });

    } catch (error) {
        console.error("Error al iniciar el servidor:", error.message);
    }
};

iniciarServidor();

