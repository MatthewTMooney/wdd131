
const year = new Date().getFullYear();
document.getElementById('currentyear').textContent = year;


const lastMod = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastMod.toLocaleDateString();

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');


    if (navMenu.classList.contains('open')) {
        hamburger.textContent = '✖';
    } else {
        hamburger.textContent = '☰';
    }
});