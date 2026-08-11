function criarTabuleiro() {
    const tabuleiro = document.querySelector(".tabuleiro");
    
    for (let c= 1; c <= 8; c++){
            for (let i = 1; i <= 8; i++){
    let casa = document.createElement("div");
    casa.classList.add("casa");
    tabuleiro.appendChild(casa);

    if((c + i) % 2 == 0){
    casa.classList.add("preto");
    }
  }
 }
}


criarTabuleiro();