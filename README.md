# Proyecto Denuncia Garzón

## ¿De qué trata el proyecto?

Denuncia Garzón es un proyecto que estamos desarrollando como aprendices del SENA. La idea es crear un sistema que permita a los ciudadanos registrar denuncias y consultar su estado.

En esta parte del proyecto estamos trabajando en el backend y en la base de datos MongoDB, para guardar y consultar la información.

## Herramientas que estamos utilizando

- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
- MongoDB Compass
- Visual Studio Code

## ¿Qué necesitamos para ejecutar el proyecto?

- Node.js y npm.
- MongoDB Community Server en ejecución.
- Visual Studio Code.

## ¿Cómo instalar el proyecto?

1. Descargar o clonar el repositorio.
2. Abrir la carpeta `backend` en Visual Studio Code.
3. Abrir la terminal y ejecutar:

```bash
npm install
```

4. Crear un archivo llamado `.env` tomando como ejemplo `.env.example`.
5. Revisar que `MONGO_URI` tenga la dirección de la base de datos MongoDB que se va a utilizar.

## ¿Cómo iniciar el backend?

En la terminal ejecutar:

```bash
npm start
```

El backend estará disponible en `http://localhost:3000`.

Para iniciar en modo de desarrollo:

```bash
npm run dev
```

## ¿Cómo comprobar que funciona?

Abrir en el navegador:

`http://localhost:3000/api/health`

Si todo está funcionando, la respuesta tendrá el estado `healthy` y mostrará que MongoDB está conectado.

## Carpetas y archivos del proyecto

- `src/app.js`: configura Express y registra las rutas.
- `src/server.js`: conecta MongoDB e inicia el servidor. También permite cerrarlo de forma ordenada.
- `src/config`: contiene la configuración y conexión con MongoDB.
- `src/controllers`: contiene las funciones que atienden las solicitudes.
- `src/routes`: contiene las rutas del backend.
- `src/models`: contiene la estructura de los datos de MongoDB.
- `src/middlewares`: contiene funciones que se ejecutan durante las solicitudes, como el manejo de errores.
- `.env.example`: sirve como ejemplo para configurar las variables del proyecto.
- `.gitignore`: indica qué archivos no debemos subir a GitHub.

## Integrantes

- Jorge Stiven Cano Vargas
- Erick Santiago Quimbaya

## Formación

Proyecto realizado como parte de nuestra formación en Análisis y Desarrollo de Software (ADSO) del SENA.
