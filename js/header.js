export default function initHeader() {
  const links = document.querySelectorAll(".header-menu a");

  function barraBaixa() {
    const url = location.href;
    links.forEach((link) => {
      link.classList.remove("ativo");
      if (url.includes(link.href)) {
        link.classList.add("ativo");
      }
    });
  }
  barraBaixa();
}
