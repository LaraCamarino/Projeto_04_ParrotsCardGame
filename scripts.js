let quantidadeCartas = Number(prompt("Com quantas cartas você deseja jogar?\n\nPor favor, selecione um número par entre 4 e 14."));

function iniciarJogo() {
    perguntarQuantidade()
}

function perguntarQuantidade() {
    while(quantidadeCartas % 2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14
        ) {
       quantidadeCartas = Number(prompt("Com quantas cartas você deseja jogar?\n\nPor favor, selecione um número par entre 4 e 14."));
    }
}

perguntarQuantidade();

function embaralhar() {
    return Math.random() - 0.5;
}

let conteudoJogo = document.querySelector(".conteudo");
let imagensCartas = [];
let quantidadePares = quantidadeCartas / 2;
   
function distribuindoCartas() {
    for (let i = 0; i < quantidadePares; i++){
        imagensCartas[i] = `
        <div class="carta" onclick="clicarCarta(this)">
            <div class="face-carta frente">
                <img src="/Imagens/front.png">
            </div>
            <div class="face-carta verso">
                <img src="Imagens/img${i}.gif">
            </div>
        </div>
        `
        }

    for (let i = 0; i < quantidadePares; i++) {
    imagensCartas.push(imagensCartas[i])    
    }

    imagensCartas.sort(embaralhar);

    conteudoJogo.innerHTML = imagensCartas.join(" ");
}

distribuindoCartas(); 

let primeiraCarta = null;
let segundaCarta = null;
let quantidadeJogadas = 0;

function clicarCarta(elemento){
    elemento.classList.add("selecionada");
    if(primeiraCarta === null) {
        primeiraCarta = elemento;
    } else {
        segundaCarta = elemento;
        verificarPares();
    }
}

function verificarPares() {
    if(primeiraCarta.innerHTML === segundaCarta.innerHTML) {
        primeiraCarta.classList.add("parAchado");
        segundaCarta.classList.add("parAchado");
        primeiraCarta = null;
        segundaCarta = null;
        setTimeout(finalizarJogo, 500);
    } else {
        setTimeout(desvirarCartas, 1000);
    }
    quantidadeJogadas = quantidadeJogadas + 2;
}

function desvirarCartas() {
    primeiraCarta.classList.remove("selecionada");
    segundaCarta.classList.remove("selecionada");
    primeiraCarta = null;
    segundaCarta = null;
}

function finalizarJogo() {
    let cartasComPar = document.querySelectorAll(".parAchado");
    if(cartasComPar.length === quantidadeCartas) {
        alert(`Parabéns!!!\n\n Você ganhou em ${quantidadeJogadas} jogadas!`);
        reininciarJogo();
    }
}
function reininciarJogo() {
    let perguntaReiniciar = prompt("Deseja jogar novamente?\n\nResponda 'Sim' ou 'Não'.");
    if(perguntaReiniciar === "Sim" || perguntaReiniciar === "sim") {
        document.location.reload(true);
    } else if(perguntaReiniciar === "Não" || perguntaReiniciar === "não") {
        alert("Obrigada por jogar!");
    }
}
