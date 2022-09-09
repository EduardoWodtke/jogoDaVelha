
let jogador = "X";
let vit_X = 0;
let vit_O = 0;

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");



function jogada(casa) {
    if (casa.innerHTML === "") {
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();
    }

}
function alterna_jogador() {
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}
function verifica_ganhador() {
    if (casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa01.innerHTML === casa03.innerHTML) {
        document.getElementById("ganhador").innerHTML = `Ganhador foi: ${casa01.innerHTML}`
        placar(casa01.innerHTML);
    } else if (casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML) {
        document.getElementById("ganhador").innerHTML = `Ganhador foi: ${casa04.innerHTML}`
    } else if (casa07.innerHTML != "" && casa07.innerHTML === casa08.innerHTML && casa07.innerHTML === casa09.innerHTML) {
        document.getElementById("ganhador").innerHTML = `Ganhador foi: ${casa07.innerHTML}`
    } else if (casa01.innerHTML != "" && casa01.innerHTML === casa03.innerHTML && casa01.innerHTML === casa07.innerHTML) {
        document.getElementById("ganhador").innerHTML = `Ganhador foi: ${casa01.innerHTML}`
    } else if (casa02.innerHTML != "" && casa02.innerHTML === casa04.innerHTML && casa02.innerHTML === casa08.innerHTML) {
        document.getElementById("ganhador").innerHTML = `Ganhador foi: ${casa02.innerHTML}`
    } else if (casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa09.innerHTML) {
        document.getElementById("ganhador").innerHTML = `Ganhador foi: ${casa03.innerHTML}`
    } else if (casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa01.innerHTML === casa09.innerHTML) {
        document.getElementById("ganhador").innerHTML = `Ganhador foi: ${casa01.innerHTML}`
    } else if (casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa07.innerHTML) {
        document.getElementById("ganhador").innerHTML = `Ganhador foi: ${casa03.innerHTML}`
    }
}

function reinicia(){
    casa01.innerHTML = "";
    casa02.innerHTML = "";
    casa03.innerHTML = "";
    casa04.innerHTML = "";
    casa05.innerHTML = "";
    casa06.innerHTML = "";
    casa07.innerHTML = "";
    casa08.innerHTML = "";
    casa09.innerHTML = "";
    document.getElementById("ganhador").innerHTML = "";
    jogador = "X";
}
function placar(vencedor) {
    if (vencedor === "X"){
        vit_X = vit_X + 1;
    }else{
        vit_O = vit_O + 1;
    }

    document.getElementById("X").innerHTML = `${vit_X}`;

    
}