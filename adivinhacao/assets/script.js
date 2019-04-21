window.addEventListener("DOMContentLoaded", function(event) {


let frases = ["Toda a grandeza deste mundo não vale tanto quanto um bom amigo", "Nós sabemos que a amizade não é sempre fácil, mas sem dúvidas vale a pena lutar por ela", "Decidir não escolher, não é realmente uma decisão", "Toda pessoa é culpada do bem que não fez", "Como é duro odiar os que se gostaria de amar", `<img src="./assets/ts.png">`, `<img src="./assets/vt.png">`]

let resultado = document.getElementById("resultado");
let play = document.querySelector("#play")

function frase1 () {
    resultado.innerHTML = frases[0];
}

function frase2 (){
    resultado.innerHTML = frases [1];
}

function frase3(){
    resultado.innerHTML = frases [2];
}

function frase4(){
    resultado.innerHTML = frases [3];
}

function frase5(){
    resultado.innerHTML = frases [4];
}

function frase6(){
    resultado.innerHTML = frases [5];
}

function frase7(){
    resultado.innerHTML = frases [6];
}


play.addEventListener("click", function(event){
    frase1();

    setTimeout(function(){

        frase7()

    }, 7000);

    setTimeout(function(){

        frase2()

    }, 14000);

    setTimeout(function(){

        frase6()

    }, 21000);

    setTimeout(function(){

        frase3()

    }, 28000);

    setTimeout(function(){

        frase6()

    }, 35000);

    setTimeout(function(){

        frase4()

    }, 42000);

    })

    setTimeout(function(){

        frase7()

    }, 48000);

    setTimeout(function(){

        frase5()

    }, 54000);

    setTimeout(function(){

        frase7()

    }, 61000);

});