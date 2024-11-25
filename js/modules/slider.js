export default function initSlider() {
  const slides = document.querySelector(".slides");
  const indicators = document.querySelectorAll(".indicator");
  let currentSlide = 0;
  const totalSlides = indicators.length;

  function updateSlider() {
    // Mover o slider
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Atualizar o estado dos indicadores
    indicators.forEach((indicator) => indicator.classList.remove("active"));
    indicators[currentSlide].classList.add("active");
  }

  // Configurar clique nos indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  // Autoplay com intervalo de 15 segundos
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }, 15000); // 15 segundos
}
