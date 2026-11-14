import mongoose from "../config/db.js";
import { NODE_ENV } from "../config/environment.js";

const obtenerEstado = async (req, res) => {
    const inicio = Date.now();

    try {
        if (mongoose.connection.readyState !== 1 || !mongoose.connection.db) {
            throw new Error("MongoDB no está conectado");
        }

        await mongoose.connection.db.admin().ping();
        const latencia = Date.now() - inicio;

        return res.status(200).json({
            status: "healthy",
            timestamp: new Date().toISOString(),
            environment: NODE_ENV,
            services: {
                api: {
                    status: "up",
                    uptime_seconds: Math.floor(process.uptime())
                },
                mongodb: {
                    status: "healthy",
                    connection_state: "connected",
                    latency_ms: latencia
                }
            }
        });
    } catch (error) {
        const respuesta = {
            status: "unhealthy",
            timestamp: new Date().toISOString(),
            environment: NODE_ENV,
            services: {
                api: {
                    status: "up",
                    uptime_seconds: Math.floor(process.uptime())
                },
                mongodb: {
                    status: "unavailable"
                }
            }
        };

        if (NODE_ENV === "development") {
            respuesta.services.mongodb.error = error.message;
        }

        return res.status(503).json(respuesta);
    }
};

export { obtenerEstado };
