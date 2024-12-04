const formulario = document.querySelector("form");
console.log(formulario);

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando";

  const data = new FormData(formulario);

  fetch("../../enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-1 columnAll' style='padding: 1rem; border-radius: 4px; background: #f7f7f7'><span style='color: #317a00;'>Mensagem enviada</span>, em breve entraremos em contato.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-1 columnAll' style='padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso <a href='https://wa.me/55119987111198' target='_blank' style='color: #4eef53; text-decoration: underline; font-weight: bold;'>WhatsApp</a>.</p>";
  }
}
