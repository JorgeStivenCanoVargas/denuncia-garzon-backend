# Proyecto Denuncia Garzón

## ¿De qué trata el proyecto?

Denuncia Garzón es un proyecto que estamos desarrollando como aprendices del SENA. Su objetivo es crear un sistema que permita a los ciudadanos registrar denuncias y consultar su estado.

En esta parte del proyecto estamos trabajando en el backend y en la base de datos MongoDB, para guardar y consultar la información.

## Herramientas utilizadas

- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
- MongoDB Compass
- Visual Studio Code

## Requisitos para ejecutar el proyecto

- Node.js y npm.
- MongoDB Community Server instalado y en ejecución.
- Visual Studio Code.

## Instalación

1. Descargar o clonar el repositorio.
2. Abrir la carpeta `backend` en Visual Studio Code.
3. Abrir la terminal y ejecutar:

```bash
npm install
```

4. Crear un archivo llamado `.env` tomando como ejemplo `.env.example`.
5. Verificar que `MONGO_URI` tenga la dirección de conexión de MongoDB.

## Ejecución

Para iniciar el backend:

```bash
npm start
```

Para iniciar en modo de desarrollo:

```bash
npm run dev
```

El servidor estará disponible en:

`http://localhost:3000`

## Comprobar el funcionamiento

Abrir en el navegador:

`http://localhost:3000/api/health`

La respuesta debe mostrar:

- Estado de la API: `up`.
- Estado de MongoDB: `healthy`.
- Estado de conexión: `connected`.

## Estructura del proyecto

```text
backend/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── environment.js
│   ├── controllers/
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── routes/
│   │   └── healthRoutes.js
│   ├── app.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Integrantes

- Jorge Stiven Cano Vargas
- Erick Santiago Quimbaya

## Formación

Proyecto realizado como parte de nuestra formación en Análisis y Desarrollo de Software (ADSO) del SENA.