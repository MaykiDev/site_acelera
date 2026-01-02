// Data configurada para 10 de Março de 2026 às 13:30
const dataEvento = new Date("April 10, 2026 13:30:00").getTime();

const atualizarCronometro = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataEvento - agora;

    // Cálculo de meses aproximado
    const meses = Math.floor(distancia / (1000 * 60 * 60 * 24 * 30.44));
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("months").innerHTML = meses;
    document.getElementById("days").innerHTML = dias;
    document.getElementById("hours").innerHTML = horas;
    document.getElementById("minutes").innerHTML = minutos;

    if (distancia < 0) {
        clearInterval(atualizarCronometro);
        document.querySelector(".countdown-container").innerHTML = "<h2 style='color:white'>O EVENTO COMEÇOU!</h2>";
    }
}, 1000);

// Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
});

function initInfiniteScroll(trackId, direction = 'up', speed = 1) {
    const track = document.getElementById(trackId);
    const images = Array.from(track.children);
    
    // Clona as imagens para garantir que o espaço esteja sempre preenchido
    images.forEach(img => {
        const clone = img.cloneNode(true);
        track.appendChild(clone);
    });

    let scrollPos = 0;
    const scrollHeight = track.scrollHeight / 2; // Metade do conteúdo (original)

    function animate() {
        if (direction === 'up') {
            scrollPos -= speed;
            if (Math.abs(scrollPos) >= scrollHeight) {
                scrollPos = 0; // Reset invisível
            }
        } else {
            scrollPos += speed;
            if (scrollPos >= 0) {
                scrollPos = -scrollHeight; // Reset invisível
            }
        }

        track.style.transform = `translateY(${scrollPos}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

// Inicia as duas colunas com direções opostas
// O número 1 é a velocidade (aumente para 2 ou 3 se quiser mais rápido)
window.onload = () => {
    initInfiniteScroll('track1', 'up', 0.5);
    initInfiniteScroll('track2', 'down', 0.5); 
};