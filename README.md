# Proyecto Denuncia Garzón

## ¿De qué trata el proyecto?

Denuncia Garzón es un proyecto que estamos desarrollando como aprendices del SENA. La idea es crear un sistema que permita a los ciudadanos registrar denuncias y consultar su estado.

En esta parte del proyecto estamos trabajando en la base de datos y el backend, para que la información se pueda guardar y consultar correctamente.

## Herramientas que estamos utilizando

- JavaScript
- Node.js
- Express
- MongoDB
- MongoDB Compass
- Visual Studio Code

## ¿Qué necesitamos para ejecutar el proyecto?

Antes de iniciar debemos tener instalado:

- Node.js
- MongoDB Community Server
- Visual Studio Code

## ¿Cómo instalar el proyecto?

1. Descargar o clonar el proyecto.
2. Abrir la carpeta `backend` en Visual Studio Code.
3. Abrir la terminal.
4. Ejecutar el siguiente comando:

```bash
npm install
```

5. Crear un archivo llamado `.env` y configurarlo tomando como ejemplo el archivo `.env.example`.

## ¿Cómo iniciar el backend?

En la terminal de Visual Studio Code ejecutamos:

```bash
npm start
```

Si todo está funcionando, el servidor estará disponible en:

http://localhost:3000

## ¿Cómo comprobar que funciona?

Abrimos esta dirección en el navegador:

http://localhost:3000/api/health

Si aparece un mensaje indicando que el servidor está activo y la base de datos está conectada, significa que todo está funcionando correctamente.

## Carpetas y archivos del proyecto

- `config`: contiene la conexión con MongoDB.
- `controllers`: contiene las funciones que realizan las operaciones.
- `models`: contiene la estructura de los datos de los usuarios.
- `routes`: contiene las rutas para acceder a las funciones.
- `server.js`: es el archivo desde donde iniciamos el servidor.
- `.env.example`: sirve como ejemplo para configurar las variables del proyecto.
- `.gitignore`: indica qué archivos no debemos subir a GitHub.

## Integrantes

- Jorge Stiven Cano Vargas
- Erick Santiago Quimbaya

## Formación

Proyecto realizado como parte de nuestra formación en Análisis y Desarrollo de Software (ADSO) del SENA.