export default function slideVitrin(element, events, callback) {
  document.addEventListener("DOMContentLoaded", () => {
    const ulList = document.querySelectorAll(".menu-1 ul");
    const setaList = document.querySelectorAll(".seta");

    ulList.forEach((ul, ulIndex) => {
      let currentIndex = 0;

      // Função para atualizar o slide acima de 800px
      const updateSlide = () => {
        const slides = ul.children;
        const totalSlides = slides.length;

        // Remove a classe 'active' de todos os itens e esconde os que não devem aparecer
        Array.from(slides).forEach((slide, index) => {
          slide.style.display = "none"; // Esconde todos
          if (index >= currentIndex && index < currentIndex + 3) {
            slide.style.display = "block"; // Mostra os próximos 3
          }
        });
      };

      // Configura cada seta correspondente
      const seta = setaList[ulIndex];
      seta.addEventListener("click", (event) => {
        event.preventDefault();
        const totalSlides = ul.children.length;

        currentIndex = (currentIndex + 1) % totalSlides; // Incrementa o índice
        updateSlide();
      });

      // Função para habilitar o toque em dispositivos móveis
      let startX;
      ul.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX; // Ponto inicial
      });

      ul.addEventListener("touchmove", (e) => {
        if (!startX) return;

        const endX = e.touches[0].clientX;
        const diff = startX - endX;

        if (diff > 50) {
          // Arrastou para a esquerda
          currentIndex = (currentIndex + 1) % ul.children.length;
          updateSlide();
        } else if (diff < -50) {
          // Arrastou para a direita
          currentIndex =
            (currentIndex - 1 + ul.children.length) % ul.children.length;
          updateSlide();
        }

        startX = null; // Reseta o ponto inicial
      });

      // Atualiza o slide ao carregar a página
      updateSlide();
    });
  });
}
