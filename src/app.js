import express from "express";
import cors from "cors";
import healthRoutes from "./routes/healthRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import { rutaNoEncontrada, manejarErrores } from "./middlewares/errorHandler.js";

const app = express();

// Middlewares generales
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "Backend de Denuncia Garzón funcionando"
    });
});

// Rutas del proyecto
app.use("/api/health", healthRoutes);
app.use("/api/usuarios", usuarioRoutes);

// Manejo de rutas y errores
app.use(rutaNoEncontrada);
app.use(manejarErrores);

export default app;
