/*
    Objetivo - quando clicar no botão, temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar os elementos html na tela

    - passo 2 - dar um jeito de indentificar o clique do usuariono botão

    - passo 3 - desmarcar o botao selicionado anterior

    - passo 4 - marcar o botao clicando como se tivesse selecionada

    - passo 5 - esconder a imagem de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado
*/

const botoesCarrossel=document.querySelectorAll('.botao');
const imagens=document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice)=> {
    botao.addEventListener('click', ()=>{

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
