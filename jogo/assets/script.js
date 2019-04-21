window.addEventListener('DOMContentLoaded', function(event) {
    let name = document.getElementById("user");
    let choices = document.getElementById("escolha");
    let options = ["pedra", "papel", "tesoura", "lagarto", "spock"];
    let resultado = document.getElementById("result");
    const getPlayerName = document.querySelector('#getPlayerName');

//Nome do jogador
   

    getPlayerName.addEventListener('click', function() {
      let playerName = document.getElementById('playerName').value;
      let ola = document.getElementById("saudacao");
  
      if (playerName) {
        ola.innerHTML = `<h1> Boa sorte, ${playerName}</h1>`
      } 
      else {
        alert("Por favor, preencha seu nome!");
      }
    });



// Probabilidades de resultados 

    choices.addEventListener("change", function(){
        let computer = options[Math.floor(Math.random() * options.length)];
        let ganhador = "Você ganhou!"
        let perdedor = "Que pena, você perdeu!"
        let empate = "Empatou! Jogue novamente"
       
        

        switch(choices.value){
            case "pedra":
                if(computer == choices.value) {
                    resultado.innerHTML = `<h3>${empate}</h3><img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
            
                else if(computer == "papel") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Papel cobre pedra...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
            
                else if(computer == "tesoura") {
                    resultado.innerHTML = `<h3>${ganhador}</h3>` + "<p> Pedra esmaga tesoura...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break 
                }
               
                else if(computer == "lagarto") {
                    resultado.innerHTML = `<h3>${ganhador}</h3>` + "<p> Pedra esmaga lagarto...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
            
                else if(computer == "spock") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Spock vaporiza pedra...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
            
            case "papel":
                if(computer == choices.value) {
                    resultado.innerHTML = `<h3>${empate}</h3><img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
            else if(computer == "pedra") {
                    resultado.innerHTML = `<h3>${ganhador}</h3>` + "<p> Papel cobre pedra...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
            else if(computer == "tesoura") {
                    resultado.innerHTML = `<h3>${ganhador}</h3>` + "<p> Tesoura corta papel...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break 
                }
           
            else if(computer == "lagarto") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Lagarto come papel...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
            else if(computer == "spock") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Papel desqualifica Spock...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }

            case "tesoura":
                if(computer == choices.value) {
                    resultado.innerHTML = `<h3>${empate}</h3><img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
            
            else if(computer == "papel") {
                    resultado.innerHTML = `<h3>${ganhador}</h3>` + "<p> Tesoura corta papel...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
            else if(computer == "pedra") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Pedra esmaga tesoura...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break 
                }
           
            else if(computer == "lagarto") {
                    resultado.innerHTML = `<h3>${ganhador}</h3>` + "<p> Tesoura decapita lagarto...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
            else if(computer == "spock") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Spock vaporiza tesoura...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
            
            case "lagarto":
                if(computer == choices.value) {
                    resultado.innerHTML = `<h3>${empate}</h3><img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
                else if(computer == "papel") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Lagarto come papel...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
                else if(computer == "pedra") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Pedra esmaga lagarto...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break 
                }
           
                else if(computer == "tesoura") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Tesoura decapita lagarto...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
                else if(computer == "spock") {
                    resultado.innerHTML = `<h3>${ganhador}</h3>` + "<p> Lagarto envenena Spock...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
                
            case "spock":
                if(computer == choices.value) {
                    resultado.innerHTML = `<h3>${empate}</h3><img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
                else if(computer == "papel") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>`+ "<p> Papel desqualifica Spock...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
                else if(computer == "tesoura") {
                    resultado.innerHTML = `<h3>${ganhador}</h3>` + "<p> Spock vaporiza tesoura...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break 
                }
           
                else if(computer == "lagarto") {
                    resultado.innerHTML = `<h3>${perdedor}</h3>` + "<p> Lagarto envenena Spock...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                    choices.value = ""
                    break
                }
        
            else if(computer == "pedra") {
                resultado.innerHTML = `<h3>${ganhador}</h3>` + "<p> Spock vaporiza pedra...</p>" + `<img src="https://media.giphy.com/media/Xmbnu0oH3bMEo/giphy.gif">`
                choices.value = ""
                break
            }
        }

    })

});

