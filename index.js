document.addEventListener('DOMContentLoaded', function() {
    // JavaScript para controlar el despliegue y plegado de los contenidos y el cambio de dirección de la flecha
    const menus = document.querySelectorAll('.menu');

    menus.forEach((menu) => {
        const title = menu.querySelector('h3');
        const content = menu.querySelector('.content');
        const arrow = title.querySelector('.arrow');

        title.addEventListener('click', () => {
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                arrow.style.transform = 'rotate(90deg)';
            } else {
                content.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });

    // JavaScript para el contador regresivo
    const fechaActual = new Date();
    const fechaFinal = new Date(fechaActual);
    fechaFinal.setHours(23, 59, 59, 999); // Establece la hora final a las 23:59:59 del mismo día
    const contadorElemento = document.getElementById('contador');

    let horasRestantes = 0;
    let minutosRestantes = 0;
    let segundosRestantes = 0;
    let contadorActualizado = false;

    function actualizarContador() {
        const ahora = new Date();
        const diferencia = fechaFinal - ahora;

        if (diferencia <= 0) {
            if (!contadorActualizado) {
                contadorElemento.textContent = 'Fin de la oferta :(';
                console.log('La oferta ha terminado.');
                contadorActualizado = true;
            }
        } else {
            const tiempoRestante = new Date(diferencia);
            horasRestantes = tiempoRestante.getUTCHours();
            minutosRestantes = tiempoRestante.getUTCMinutes();
            segundosRestantes = tiempoRestante.getUTCSeconds();
            contadorActualizado = false;
            console.log(`Tiempo restante: ${horasRestantes}:${minutosRestantes}:${segundosRestantes}`);
        }
    }

    function actualizarElementoContador() {
        contadorElemento.textContent = `${horasRestantes.toString().padStart(2, '0')}:${minutosRestantes.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
        console.log('Contador actualizado en el DOM.');
    }

    // Actualiza el contador cada segundo
    setInterval(() => {
        actualizarContador();
        if (!contadorActualizado) {
            actualizarElementoContador();
        }
    }, 1000);

    // Inicializa el contador
    actualizarContador();
    actualizarElementoContador();

});

// JavaScript para abrir y cerrar el modal
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const galleryImages = document.querySelectorAll('.gallery img');
const closeModal = document.querySelector('.close-modal');

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = img.src;
        modalImage.alt = img.alt;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});