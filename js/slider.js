export default function initSlider() {
  function slider(slide) {
    const indicators = document.querySelectorAll(".indicator");
    const slides = document.querySelector(".slides");
    let currentSlide = 0;

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
      });
    });

    function updateSlider() {
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
      indicators.forEach((ind) => ind.classList.remove("active"));
      indicators[currentSlide].classList.add("active");
    }

    // Opcional: Autoplay
    setInterval(() => {
      currentSlide = (currentSlide + 1) % indicators.length;
      updateSlider();
    }, 5000); // 5 segundos
  }
}
