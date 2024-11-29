//Importacion del modulo web-push
const webPush = require('web-push');
//Definicion de las llaves
const PUBLIC_VAPID_KEY = process.env.PUBLIC_VAPID_KEY;
const PRIVATE_VAPID_KEY = process.env.PRIVATE_VAPID_KEY;

//Configurar los detalles de VAPID en las notificaciones push de la aplicacion
webPush.setVapidDetails('mailto: jesussjg811@gmail.com', PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY)

module.exports = webPush;