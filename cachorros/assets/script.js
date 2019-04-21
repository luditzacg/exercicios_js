window.addEventListener('DOMContentLoaded', function(event) {
    
    let dogs = ["Lili", "Thor", "Iuli", "Margot", "Mell"];
    
    let displayText = document.getElementById("result");
    displayText.innerHTML = `<h1>O total de nomes de cachorro é de: ${dogs.length}</h1>`

    dogs.forEach(function(item){
        displayText.innerHTML += `<li>${item}</li>`

    });

});
