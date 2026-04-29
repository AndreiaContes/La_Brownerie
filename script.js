//////////////////////////////
// 📲 WHATSAPP CONFIG
//////////////////////////////
const numeroWhatsApp = "5521980592023";

//////////////////////////////
// 🛒 BOTÕES DE PRODUTO
//////////////////////////////
const botoesPedido = document.querySelectorAll(".product-info a");

botoesPedido.forEach((botao) => {
  botao.addEventListener("click", function (event) {
    event.preventDefault();

    const card = botao.closest(".product-card");
    const nomeProduto = card.querySelector("h3").innerText;

    const mensagem = `Olá! Vim pelo site da La_Brownierie e gostaria de saber mais sobre: ${nomeProduto}.`;

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
  });
});

//////////////////////////////
// 🍔 MENU HAMBÚRGUER
//////////////////////////////
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// segurança: só executa se existir
if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // troca ícone
    menuToggle.innerHTML = navbar.classList.contains("active") ? "✕" : "☰";
  });

  // fecha menu ao clicar em um link
  const linksMenu = navbar.querySelectorAll("a");

  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuToggle.innerHTML = "☰";
    });
  });
}

//////////////////////////////
// 🔝 SCROLL SUAVE (extra profissional)
//////////////////////////////
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
  link.addEventListener("click", function (e) {
    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
