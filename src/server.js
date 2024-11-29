//Ejecucion de DOTENV
require('dotenv').config();
//Importamos la libreria de express
const express = require('express');
//Importar morgan
const morgan = require('morgan');
//Importar body-parser
const bodyParser = require('body-parser');
//Importacion de path
const path = require('node:path');
//Ejecutar el modulo de express
const app = express();

//Importacion de Routes
const notificacionRoute = require('./routes/notificacionRoute');

//Middlewares
app.use(morgan('dev'));
// app.use(express.urlencoded( { extended: false } ));//Leer los datos que se pasan en la url
app.use(bodyParser.json());//Convertir los datos que llegan a JSON

//Routes
app.use('/notificaciones',  notificacionRoute)

//Static Content
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})