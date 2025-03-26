let currentIndex = 0;
const totalSlides = document.querySelectorAll(".promo-slider img").length;
const slider = document.querySelector(".promo-slider");
const dots = document.querySelectorAll(".dot");

function changeSlide(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

// Gán sự kiện click cho từng dấu chấm
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => changeSlide(index));
});
