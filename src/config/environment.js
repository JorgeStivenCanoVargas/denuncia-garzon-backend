import "dotenv/config";

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const NODE_ENV = process.env.NODE_ENV || "development";

if (!MONGO_URI) {
    console.error("Falta configurar la variable MONGO_URI en el archivo .env");
    process.exit(1);
}

export { PORT, MONGO_URI, NODE_ENV };
