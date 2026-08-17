const senhaCorreta = "12345"
const btnEnviar = document.querySelector(".btnEnviar")

btnEnviar.addEventListener("click", function(){
verificar()
})

function verificar() {
    const input = document.querySelector(".inputSenha").value

    const senha = document.querySelector(".senha")
    for (let i = 0 ; i < 5; i++) {
        let number = senha.children[i]
        number.textContent = input[i]

        if(input[i] == senhaCorreta[i]){
            number.classList.add("certo");
        }else{
            number.classList.add("errado")
        }

    }
}
