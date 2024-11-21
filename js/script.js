import initHeader from "./modules/header.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import slideVitrine from "./modules/slide.js";

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initDropDownMenu();
initHeader();
slideVitrine();
