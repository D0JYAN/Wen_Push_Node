# ¿Qué Es?
Este es un proyecto en el cual se muestra el uso de PUSH API en una página web, el objetivo es ver como una aplicacion (cliente) interactua con el servidor (servidor) para mostrar notificaciones personalizadas.

# ¿Qué Utiliza?
En este proyecto se hace uso de las siguientes herramientas:
  - Node.js (entorno de ejecución)
  - Express.js (manejo de rutas)
  - Body-Parser (conversion de la información)
  - Morgan (mostrar solicitudes en consola)
  - Dotenv (manejo de variables)
  - Web-Push (notificaiones Push API)

# Estructura
El proyecto cuenta con la siguiente estructura:
```plaintext
Wen_Push_Node
├── node_modules/
├── src/
│   ├── public/
│   │   ├── css/
│   │   │   └── estilo01.css
│   │   ├── img/
│   │   │   ├── logo.png
│   │   ├── index.html
│   │   ├── main.js
│   │   └── serviceworker.js
│   ├── routes/
│   │   ├── notificacionRoute.js
│   ├── server.js
│   └── webPush.js 
├── .env
├── package-lock.json
├── package.json

```

# ¿Cómo inicializar el proyecto?

  1. Para levantar el proyecto, dentro de nuestro editor de código, abrimos una terminal con la ruta del proyecto.
  2. Una vez dentro del proyecto, en la terminal se escribe el comando `node --watch src/server.js`.
  3. Una vez iniciado, en la termina aparecera el mensaje de "Servidor corriendo en http://localhost:3000".
  4. Mientras se presionan las teclas Ctrl + Clic izquierdo del mouse sobre el link del servidor, este nos abrirá el navegador y mostrará la ventana para hacer el envio de notificaciones.

# ¿Cómo apagar el proyecto?

  1. Una vez terminadas las pruebas y visto que todo funciona correctamente, posicionados en la terminal, se presionan las teclas `Ctrl + C`.
  2. ¡Y listo!

## Nota: Todo el codigo tiene comentarios para su mejor comprension.
