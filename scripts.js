let quantidadeCartas = Number(prompt("Com quantas cartas você deseja jogar?\n\nPor favor, selecione um número par entre 4 e 14."));


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

