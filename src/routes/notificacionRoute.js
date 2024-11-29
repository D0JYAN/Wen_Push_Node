//Importacion de express
const express = require('express');
//Importacion del modulo de Router
const router = express.Router();
//Importacion del archivo webPush que tiene almacenada las llaves
const webPush = require('../webPush');

//Guardar datos que llegan del cliente
let pushSubscription;

//Endpoints
//Almacenar los datos de la subscripcion (la sesion del usuario y la llave publica)
router.post('/subscripcion', async (req, res) => {
    pushSubscription = req.body;
    console.log(req.body);
    //Se devuelve un codigo 200 cuando todo esta bien
    res.status(200).json();
})
//Almacenar el mensaje que el cliente envio desde el form
router.post('/nuevoMensaje', async (req, res) => {
    const { message } = req.body;
    //Creacion de una variable que almacena los datos recibidos en formato JSON
    const data = JSON.stringify({
        title: 'Notificación Enviada Desde El Servidor Con Push API Y Dice:',
        message: message
    })
    //Envio de la notificacion al cliente
    try {
        await webPush.sendNotification(pushSubscription, data);
    } catch (error) {
    //Si hay un error, se imprime en consola
        console.log(error);
    }
})

module.exports = router;