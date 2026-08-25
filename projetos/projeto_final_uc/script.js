const palavraSecreta = "TERMO";

const input = document.querySelector(".lpInputSenha");
const botao = document.querySelector(".lpBtnEnviar");
const linhas = document.querySelectorAll(".lpSenha");
const contador = document.querySelector(".lpTentativas");

const resultado = document.querySelector("#resultado");
const resultadoCaixa = document.querySelector(".resultadoCaixa");
const resultadoTitulo = document.querySelector("#resultadoTitulo");
const btnJogarNovamenteModal = document.querySelector("#jogarNovamente");
const btnReturnHeader = document.querySelector(".lpBtnReturn");
const body = document.body;

let tentativaAtual = 0;

botao.addEventListener("click", verificar);

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
        resultadoTitulo.textContent = "VITÓRIA";
        resultadoCaixa.style.backgroundImage = "url('assets/background-victory.png')";
        body.classList.add("lpVitoria");
        body.classList.remove("lpDerrota");
    } else {
        resultadoTitulo.textContent = "DERROTA";
        resultadoCaixa.style.backgroundImage = "url('assets/background-defeat.png')";
        body.classList.add("lpDerrota");
        body.classList.remove("lpVitoria");
    }
}

function reiniciarJogo() {
    tentativaAtual = 0;
    contador.textContent = "0";
    input.value = "";
    input.disabled = false;
    botao.disabled = false;
    
    document.querySelectorAll(".lpDigito").forEach(function (quadrado) {
        quadrado.textContent = "";
        quadrado.classList.remove("lpVerde", "lpAmarelo");
    });

    resultado.style.display = "none";
    body.classList.remove("lpVitoria", "lpDerrota");
}

btnJogarNovamenteModal.addEventListener("click", reiniciarJogo);
if (btnReturnHeader) {
    btnReturnHeader.addEventListener("click", reiniciarJogo);
}