import outsideClick from "./outsideClick.js";

export default function initSlideGaleria() {
  const carrosselContainer = document.getElementById("carrossel");
  const carrosselImg = document.querySelector(".carrossel-img");
  const carrosselClose = document.querySelector(".carrossel-close");
  const carrosselPrev = document.querySelector(".carrossel-prev");
  const carrosselNext = document.querySelector(".carrossel-next");

  let currentImageIndex = 0;
  let currentImages = []; // Armazena as imagens do carrossel atual

  // Agrupando imagens por casa
  const imagensPorCasa = {
    lucia: [
      "./imagens/fotos/casa-1.png",
      "./imagens/fotos/casa-1.png",
      "./imagens/fotos/casa-3.png",
    ],
    bruno: ["./imagens/fotos/casa-2.png", "./imagens/fotos/casa-1.png"],
  };

  // Atualiza a imagem do carrossel
  function updateCarrosselImage() {
    carrosselImg.src = currentImages[currentImageIndex];
  }

  // Abre o carrossel com as imagens da casa específica
  function openCarrossel(casa) {
    currentImages = imagensPorCasa[casa];
    currentImageIndex = 0;
    updateCarrosselImage();
    carrosselContainer.classList.remove("hidden");
    outsideClick(carrosselContainer, ["click"], closeCarrossel);
  }

  // Fecha o carrossel
  function closeCarrossel() {
    carrosselContainer.classList.add("hidden");
  }

  // Avança para a próxima imagem
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateCarrosselImage();
  }

  // Volta para a imagem anterior
  function prevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateCarrosselImage();
  }

  // Adiciona o evento de clique às imagens visíveis na galeria
  document.querySelectorAll(".galeria-foto").forEach((img) => {
    img.addEventListener("click", (event) => {
      event.preventDefault(); // Impede o redirecionamento
      const casa = img.dataset.casa; // Obtém o identificador da casa
      if (casa && imagensPorCasa[casa]) {
        openCarrossel(casa); // Abre o carrossel com as imagens da casa
      }
    });
  });

  // Adiciona eventos aos controles do carrossel
  carrosselClose.addEventListener("click", closeCarrossel);
  carrosselNext.addEventListener("click", nextImage);
  carrosselPrev.addEventListener("click", prevImage);
}
