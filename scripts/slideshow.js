// Slideshow Script (slideshow.js)
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');

let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slide.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 5000); // Change slide every 5 seconds