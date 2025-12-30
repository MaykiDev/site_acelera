const btnMobile = document.querySelector('.btn-mobile');
const nav = document.getElementById('nav');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    btnMobile.classList.toggle('active'); 
    
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Configuração do Timer para 10 de Abril de 2026 às 13:00
const dataEvento = new Date("Apr 10, 2026 13:00:00").getTime();

const atualizarTimer = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataEvento - agora;

    const meses = Math.floor(distancia / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("meses").innerText = meses < 10 ? "0" + meses : meses;
    document.getElementById("dias").innerText = dias < 10 ? "0" + dias : dias;
    document.getElementById("horas").innerText = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").innerText = minutos < 10 ? "0" + minutos : minutos;

    if (distancia < 0) {
        clearInterval(atualizarTimer);
        document.getElementById("timer").innerHTML = "EVENTO INICIADO";
    }
}, 1000);