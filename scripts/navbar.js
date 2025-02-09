// Navbar Script (navbar.js)
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navLinks = document.getElementById('navLinks');

    navbarToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});