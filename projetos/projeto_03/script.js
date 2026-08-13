const frases = [
  "Não chorax.",
  "Não chorax orelhax.",
  "Não chorax luiz.",
  "w orelha.",
  "63 so ez nada haver.",
  "O esforço de hoje constrói o sucesso de amanhã.",
  "Erros são oportunidades para aprender.",
  "Mantenha o foco e continue avançando.",
  "Sua determinação pode mudar sua história.",
  "Comece agora, mesmo que seja com pouco."
];

const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");

function mostrarFrase() {
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    fraseTexto.textContent = frases[numeroAleatorio];
}

btnFrase.addEventListener("click", function () {
    mostrarFrase();
});
