import initHeader from "./modules/header.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initDropDownMenu();
initHeader();
