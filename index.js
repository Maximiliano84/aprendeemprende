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

    function actualizarContador() {
        const ahora = new Date();
        const diferencia = fechaFinal - ahora;

        if (diferencia <= 0) {
            contadorElemento.textContent = 'Fin de la oferta :(';
        } else {
            const tiempoRestante = new Date(fechaFinal - ahora);
            const horas = tiempoRestante.getUTCHours();
            const minutos = tiempoRestante.getUTCMinutes();
            const segundos = tiempoRestante.getUTCSeconds();

            contadorElemento.textContent = `${horas.toString().padStart(2, '0')}:${minutos
                .toString()
                .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }
    }

    // Actualiza el contador cada segundo
    setInterval(actualizarContador, 1000);

    // Inicializa el contador
    actualizarContador();

});