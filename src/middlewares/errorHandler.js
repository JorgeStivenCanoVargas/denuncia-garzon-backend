const rutaNoEncontrada = (req, res, next) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        error: "Not Found",
        message: "La ruta solicitada no existe en este servidor.",
        code: "ROUTE_NOT_FOUND",
        timestamp: new Date().toISOString(),
        path: req.originalUrl
    });
};

const manejarErrores = (error, req, res, next) => {
    console.error("Error en la solicitud:", error.message);

    res.status(error.status || 500).json({
        success: false,
        statusCode: error.status || 500,
        error: error.name || "Internal Server Error",
        message: "Ocurrió un error al procesar la solicitud.",
        timestamp: new Date().toISOString(),
        path: req.originalUrl
    });
};

export { rutaNoEncontrada, manejarErrores };
