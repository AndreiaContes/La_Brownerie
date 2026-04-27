// WhatsApp principal da La_Brownierie
const numeroWhatsApp = "5521980592023";

// Captura todos os botões de produto
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