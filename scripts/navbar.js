// Navbar Script (navbar.js)
const navbarToggle = document.getElementById('navbarToggle');
const navLinks = document.getElementById('navLinks');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});