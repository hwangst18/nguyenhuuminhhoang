document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".promo-slider");
    const images = document.querySelectorAll(".promo-slider img");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");
    let currentIndex = 0;

    // Tạo nút mũi tên
    prevBtn.innerHTML = "&#10094;"; // Mũi tên trái
    nextBtn.innerHTML = "&#10095;"; // Mũi tên phải
    prevBtn.classList.add("arrow", "arrow-left");
    nextBtn.classList.add("arrow", "arrow-right");
    document.querySelector(".promo-container").appendChild(prevBtn);
    document.querySelector(".promo-container").appendChild(nextBtn);

    // Xử lý sự kiện nhấn nút
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateSlider();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
    });
});
