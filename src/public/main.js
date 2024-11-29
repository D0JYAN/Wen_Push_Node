const PUBLIC_VAPID_KEY = 'BNS4GfAFbKnIzUtdtqf2RDS1RenhQ03ou4sOAkolK_0r4Y0tCCVI35Lr4DjCgahKe8DZh5U7aNxHKH1UuDujMDg';

//Envira la peticion de subscripcion
const subscripcion = async () => {
    //Importar el servicerworker
    const register = await navigator.serviceWorker.register('/serviceworker.js', {
        scope: '/'
    });
    console.log('Nuevo ServiceWorker');

    const subs = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    });

    await fetch('/notificaciones/subscripcion', {
        method: 'POST',
        body: JSON.stringify(subs),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('subscrito');
}

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

subscripcion();