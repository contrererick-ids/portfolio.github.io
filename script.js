document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let slider = document.querySelector(".slider");
    let index = 2;

    function nextSlide() {
        index = (index + 1) % slides.length;
        let offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    // Asegurar que la primera imagen sea visible antes de la primera transición
    setTimeout(() => {
        setInterval(nextSlide, 3000);
    }, 3000); // Espera antes de iniciar el cambio de imagen
});
