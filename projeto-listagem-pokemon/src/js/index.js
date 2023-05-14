const botaoAlterarTema = document.getElementById("botao-alterar-tema");
console.log(botaoAlterarTema)
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
botaoAlterarTema.addEventListener("click", ()=>{
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    console.log(modoEscuroEstaAtivo);

    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png");
    }
});