const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Abre/Fecha o menu lateral
    navLinks.classList.toggle('active');
    
    // Transforma o hamburguer em X
    menuToggle.classList.toggle('is-active');
});

// Fecha o menu ao clicar em qualquer link (melhora a experiência do usuário)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('is-active');
    });
});