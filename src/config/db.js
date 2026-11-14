import mongoose from "mongoose";
import { MONGO_URI } from "./environment.js";

const conectarDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB conectado correctamente");
        console.log(`Base de datos: ${mongoose.connection.name}`);
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error.message);
        throw error;
    }
};

export { conectarDB };
export default mongoose;
