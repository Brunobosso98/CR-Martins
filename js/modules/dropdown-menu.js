import outsideClick from "./outsideclick.js";
export default function initDropDownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");
const seta = document.querySelector("#seta");

dropdownMenus.forEach((menu) => {
  function activateMenu() {
    menu.classList.add("active");
    seta.classList.add("rotar");
  }
  function deactivateMenu() {
    menu.classList.remove("active", "clicked");
    seta.classList.remove("rotar");
  }

  menu.addEventListener("mouseover", activateMenu);
  menu.addEventListener("mouseleave", () => {
    if (!menu.classList.contains("clicked")) {
      deactivateMenu();
    }
  });

  menu.addEventListener("click", (event) => {
    menu.classList.add("clicked");
    activateMenu();
    outsideClick(menu, deactivateMenu);
  });
});
