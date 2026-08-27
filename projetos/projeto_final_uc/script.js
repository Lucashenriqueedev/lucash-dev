const palavras = ["TERMO", "AMIGO", "NOITE", "PLANO", "PORTA"];

let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

const input = document.querySelector(".lpInputSenha");
const lpBtnEnviar = document.querySelector(".lpBtnEnviar");
const linhas = document.querySelectorAll(".lpSenha");
const contador = document.querySelector(".lpTentativas");

const resultado = document.querySelector("#resultado");
const resultadoCaixa = document.querySelector(".resultadoCaixa");
const resultadoTitulo = document.querySelector("#resultadoTitulo");
const palavraResultado = document.querySelector("#palavraResultado");

const lpBtnReset = document.querySelector("#lpBtnReset");
const lpBtnReturnHeader = document.querySelector(".lpBtnReturn");

let tentativaAtual = 0;

lpBtnEnviar.addEventListener("click", verificar);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verificar();
    }
});

function verificar() {
    if (tentativaAtual >= 6) return;

    const tentativa = input.value.toUpperCase();

    if (tentativa.length !== 5) {
        alert("Digite uma palavra com 5 letras!");
        return;
    }

    const quadrados = linhas[tentativaAtual].querySelectorAll(".lpDigito");

    for (let i = 0; i < 5; i++) {
        quadrados[i].textContent = tentativa[i];
    }

    for (let i = 0; i < 5; i++) {
        if (tentativa[i] === palavraSecreta[i]) {
            quadrados[i].classList.add("lpVerde");
        } else if (palavraSecreta.includes(tentativa[i])) {
            quadrados[i].classList.add("lpAmarelo");
        } else {
            quadrados[i].classList.add("lpCinza");
        }
    }

    tentativaAtual++;
    contador.textContent = tentativaAtual;

    if (tentativa === palavraSecreta) {
        mostrarResultado(true);
        return;
    }

    if (tentativaAtual === 6) {
        mostrarResultado(false);
        return;
    }

    input.value = "";
    input.focus();
}

function mostrarResultado(vitoria) {
    resultado.style.display = "flex";

    if (vitoria) {
        resultadoTitulo.textContent = "Vitória";
        palavraResultado.textContent = "Você acertou a palavra!";
        resultadoCaixa.style.backgroundImage = "url('assets/background-victory.png')";
        resultadoCaixa.classList.add("vitoria");
        resultadoCaixa.classList.remove("derrota");
    } else {
        resultadoTitulo.textContent = "Derrota";
        palavraResultado.textContent = "A palavra era: " + palavraSecreta;
        resultadoCaixa.style.backgroundImage = "url('assets/background-defeat.png')";
        resultadoCaixa.classList.add("derrota");
        resultadoCaixa.classList.remove("vitoria");
    }
}

function reiniciarJogo() {
    // Sorteia uma nova palavra ao reiniciar
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

    tentativaAtual = 0;
    contador.textContent = "0";
    input.value = "";
    input.disabled = false;
    lpBtnEnviar.disabled = false;

    document.querySelectorAll(".lpDigito").forEach(function (quadrado) {
        quadrado.textContent = "";
        quadrado.classList.remove("lpVerde", "lpAmarelo", "lpCinza");
    });

    resultado.style.display = "none";
    resultadoCaixa.classList.remove("vitoria", "derrota");
    resultadoCaixa.style.backgroundImage = "none";

    input.focus();
}

if (lpBtnReset) {
    lpBtnReset.addEventListener("click", reiniciarJogo);
}

if (lpBtnReturnHeader) {
    lpBtnReturnHeader.addEventListener("click", reiniciarJogo);
}