import outsideClick from "./outsideclick.js";
export default function initDropDownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");
const dropInicial = document.querySelector(".drop");
const seta = document.querySelector("#seta");

// Adiciona o evento de clique
dropInicial.addEventListener("click", function (event) {
  event.preventDefault();
});

dropdownMenus.forEach((menu) => {
  function activateMenu() {
    menu.classList.add("active");
    seta.classList.add("rotar");
  }
  function desactivateMenu() {
    menu.classList.remove("active", "clicked");
    seta.classList.remove("rotar");
  }

  menu.addEventListener("mouseover", activateMenu);
  menu.addEventListener("mouseleave", () => {
    if (!menu.classList.contains("clicked")) {
      desactivateMenu();
    }
  });

  menu.addEventListener("click", (event) => {
    menu.classList.toggle("clicked");
    activateMenu();
    outsideClick(menu, desactivateMenu);
  });
});
