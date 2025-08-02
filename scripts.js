document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slideshow-item");
    const dots = document.querySelectorAll(".slideshow-dot");
    const prevBtn = document.querySelector(".slideshow-btn.prev");
    const nextBtn = document.querySelector(".slideshow-btn.next");

    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % totalSlides;
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 1000); // ⏱️ 1 second delay
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Manual controls
    nextBtn.addEventListener("click", () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const index = parseInt(dot.getAttribute("data-slide"));
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // Initialize
    showSlide(currentSlide);
    startAutoSlide();
});