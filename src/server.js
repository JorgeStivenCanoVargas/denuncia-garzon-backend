import app from "./app.js";
import { PORT } from "./config/environment.js";
import { conectarDB } from "./config/db.js";
import mongoose from "mongoose";

let servidor;

const iniciarServidor = async () => {
    try {
        await conectarDB();

        servidor = app.listen(PORT, () => {
            console.log(`Servidor funcionando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("No fue posible iniciar el servidor:", error.message);
        process.exit(1);
    }
};

const cerrarServidor = async (senal) => {
    console.log(`
Se recibió ${senal}. Cerrando el servidor...`);

    if (servidor) {
        servidor.close(async () => {
            try {
                await mongoose.disconnect();
                console.log("Conexión con MongoDB cerrada correctamente");
                process.exit(0);
            } catch (error) {
                console.error("Error al cerrar MongoDB:", error.message);
                process.exit(1);
            }
        });
    } else {
        await mongoose.disconnect();
        process.exit(0);
    }
};

process.on("SIGINT", () => cerrarServidor("SIGINT"));
process.on("SIGTERM", () => cerrarServidor("SIGTERM"));

iniciarServidor();
