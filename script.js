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
    
    // 1. Duplicamos o conteúdo interno para criar a ilusão de continuidade
    track.innerHTML += track.innerHTML; 

    let scrollPos = 0;

    function animate() {
        // 2. O limite é a metade do scroll total (que é o conteúdo original)
        const limit = track.scrollHeight / 2;

        if (direction === 'up') {
            scrollPos -= speed;
            // Se subiu além do conteúdo original, reseta para o topo
            if (Math.abs(scrollPos) >= limit) {
                scrollPos = 0;
            }
        } else {
            scrollPos += speed;
            // Se desceu além do topo, joga para a metade (fim do original)
            if (scrollPos >= 0) {
                scrollPos = -limit;
            }
        }

        track.style.transform = `translateY(${scrollPos}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

// Inicialização (mantendo suas velocidades e direções)
window.onload = () => {
    initInfiniteScroll('track1', 'up', 0.8);
    initInfiniteScroll('track2', 'down', 0.8); 
};


function initHorizontalInfiniteScroll(className, speed = 1) {
    const grid = document.querySelector(`.${className}`);
    if (!grid) return;

    // 1. Clona os cards para criar o espelho infinito
    if (!grid.dataset.cloned) {
        grid.innerHTML += grid.innerHTML; // Duplica os cards
        grid.dataset.cloned = "true";
    }

    let scrollPos = 0;

    function animate() {
        if (window.innerWidth <= 992) {
            // A mágica: pegamos a largura total e dividimos por 2
            const halfWidth = grid.scrollWidth / 2;

            scrollPos -= speed;

            // Se a posição passar da metade, volta para 0
            // Como a segunda metade é IDÊNTICA, ninguém percebe o salto
            if (Math.abs(scrollPos) >= halfWidth) {
                scrollPos = 0;
            }

            grid.style.transform = `translateX(${scrollPos}px)`;
        } else {
            // Reseta para o modo grade no Desktop
            grid.style.transform = `translateX(0)`;
        }
        requestAnimationFrame(animate);
    }

    animate();
}

// Inicializa quando carregar
window.addEventListener('load', () => {
    initHorizontalInfiniteScroll('target-grid', 0.8);
});

function initSpeakersScroll() {
    const track = document.getElementById('speakers-track');
    if (!track) return;

    // Clona os itens para criar o efeito infinito sem gap
    const cards = Array.from(track.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let scrollPos = 0;
    const speed = 0.8; // Ajuste a velocidade aqui (menor = mais devagar)

    function animate() {
        scrollPos -= speed;
        
        // Quando chegar na metade (fim do set original), volta para 0
        // O valor 30 é o gap que definimos no CSS
        const totalWidth = track.scrollWidth / 2;
        
        if (Math.abs(scrollPos) >= totalWidth) {
            scrollPos = 0;
        }

        track.style.transform = `translateX(${scrollPos}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

// Inicializa junto com as outras funções
window.addEventListener('load', () => {
    initSpeakersScroll();
});


function toggleBenefits(type) {
    // Localiza apenas o conteúdo e a seta do card clicado
    const targetContent = document.getElementById(`benefits-${type}`);
    const targetButton = targetContent.previousElementSibling;
    const targetArrow = targetButton.querySelector('span');

    // Alterna o estado (Abre se estiver fechado, fecha se estiver aberto)
    targetContent.classList.toggle('benefits-active');
    
    // Rotaciona a seta do card clicado
    if (targetArrow) {
        targetArrow.classList.toggle('rotate-arrow');
    }
}