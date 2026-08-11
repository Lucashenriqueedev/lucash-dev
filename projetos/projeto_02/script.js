const modal = document.querySelector(".modal");
const btnAbrir = document.querySelector(".btnAbrir")
const btnFechar = document.querySelector(".btnFechar")

btnAbrir.addEventListener("click", function(){
    modal.classList.add("is-active");
})

btnFechar.addEventListener("click", function (){
    modal.classList.remove("is-active")
})