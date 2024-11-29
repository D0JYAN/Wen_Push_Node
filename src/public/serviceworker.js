console.log('Este es ServiceWorker');

//Escuchar el evento push
self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data);
    //Crear un notification
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'img/logo.png'
    })
})