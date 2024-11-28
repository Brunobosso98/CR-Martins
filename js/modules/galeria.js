import outsideClick from "./outsideClick.js";

export default function initSlideGaleria() {
  const carrosselContainer = document.getElementById("carrossel");
  const carrosselImg = document.querySelector(".carrossel-img");
  const carrosselClose = document.querySelector(".carrossel-close");
  const carrosselPrev = document.querySelector(".carrossel-prev");
  const carrosselNext = document.querySelector(".carrossel-next");

  let currentImageIndex = 0;
  const images = Array.from(document.querySelectorAll(".galeria-foto"));

  images.forEach((image) => {
    image.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  function openCarrossel(index) {
    currentImageIndex = index;
    updateCarrosselImage();
    carrosselContainer.classList.remove("hidden");
    outsideClick(carrosselContainer, ["click"], closeCarrossel);
  }

  function closeCarrossel() {
    carrosselContainer.classList.add("hidden");
  }

  function updateCarrosselImage() {
    const { src, alt } = images[currentImageIndex];
    carrosselImg.src = src;
    carrosselImg.alt = alt;
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateCarrosselImage();
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateCarrosselImage();
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openCarrossel(index));
  });

  carrosselClose.addEventListener("click", closeCarrossel);
  carrosselNext.addEventListener("click", nextImage);
  carrosselPrev.addEventListener("click", prevImage);
}
