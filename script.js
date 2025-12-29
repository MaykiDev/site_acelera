const btnMobile = document.querySelector('.btn-mobile');
const nav = document.getElementById('nav');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    
    nav.classList.toggle('active');
    // Adicionamos esta linha para o botão também saber que está ativo
    btnMobile.classList.toggle('active'); 
    
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);