// CONFIGURACIÓN DE LA FECHA (Año, Mes (0-11), Día, Hora, Minutos)
const weddingDate = new Date(2026, 5, 27, 16, 30, 0).getTime();

// ACTUALIZACIÓN DEL CONTADOR
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡LLEGÓ EL DÍA!";
    }
}, 1000);

// FUNCIÓN CONFIRMAR WHATSAPP
function confirmarWhatsApp() {
    const numero = "50499999999"; // Reemplazar con el número real
    const mensaje = encodeURIComponent("Hola, confirmo mi asistencia a la boda de Andrea & Fernando.\nMi nombre es: ____.\nInvitados: ____.");
    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
}

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});