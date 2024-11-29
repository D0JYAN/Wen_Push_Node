console.log('Este es ServiceWorker');

//Escuchar el evento push y mostrar la notificacion que se envia desde el servidor
self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data);
    //Creacion de la notificacion
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'img/logo.png'
    })
})