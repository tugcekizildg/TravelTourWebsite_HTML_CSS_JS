const menuBars = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-close');
const navbar = document.getElementById('navbar');

menuBars.addEventListener('click', () => {
    navbar.classList.add('active');    
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
});