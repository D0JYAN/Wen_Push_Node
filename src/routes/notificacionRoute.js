const express = require('express');
const router = express.Router();
const webPush = require('../webPush');

//Guardar datos que llegan
let pushSubscription;

//Endpoints
//subscripcion
router.post('/subscripcion', async (req, res) => {
    pushSubscription = req.body;
    console.log(req.body);
    res.status(200).json();
})
//Enviar Notificacion
router.post('/nuevoMensaje', async (req, res) => {
    const { message } = req.body;
    //Datos a enviar
    const data = JSON.stringify({
        title: 'Notificación Enviada Desde El Servidor Con Push API Y Dice:',
        message: message
    })
    //Enviar la notificacion
    try {
        await webPush.sendNotification(pushSubscription, data);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;