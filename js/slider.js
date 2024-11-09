let currentIndex = 0;

function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000); // Pindah otomatis setiap 3 detik
