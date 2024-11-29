const webPush = require('web-push');

const PUBLIC_VAPID_KEY = process.env.PUBLIC_VAPID_KEY;
const PRIVATE_VAPID_KEY = process.env.PRIVATE_VAPID_KEY;

//configurar
webPush.setVapidDetails('mailto: jesussjg811@gmail.com', PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY)

module.exports = webPush;