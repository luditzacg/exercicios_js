const btnA = document.querySelector("#a")
const btnB = document.querySelector("#b")
const btnC = document.querySelector("#c")
const btnD = document.querySelector("#d")
const btnE = document.querySelector("#e")
const btnF = document.querySelector("#f")
const btnG = document.querySelector("#g")
const btnH = document.querySelector("#h")
const btnI = document.querySelector("#i")
const btnJ = document.querySelector("#j")
const btnL = document.querySelector("#l")
const btnM = document.querySelector("#m")


	
	btnA.addEventListener("click", function(){
		
		document.getElementById("a").style.background = "#008000";
		document.getElementById("a").style.color = "#ffffff";
		document.getElementById("b").disabled = true; 
		
		
	})
	

	btnB.addEventListener("click", function(){
		document.getElementById("b").style.background = "#cc2900";
		document.getElementById("b").style.color = "#ffffff";
		document.getElementById("a").disabled = true; 
	})

	btnC.addEventListener("click", function(){
		document.getElementById("c").style.background = "#008000";
		document.getElementById("c").style.color = "#ffffff";
		document.getElementById("d").disabled = true; 
		
	})

	btnD.addEventListener("click", function(){
		document.getElementById("d").style.background = "#cc2900";
		document.getElementById("d").style.color = "#ffffff";
		document.getElementById("c").disabled = true; 
	})

	btnE.addEventListener("click", function(){
		document.getElementById("e").style.background = "#cc2900";
		document.getElementById("e").style.color = "#ffffff";
		document.getElementById("f").disabled = true; 
	})

	btnF.addEventListener("click", function(){
		document.getElementById("f").style.background = "#008000";
		document.getElementById("f").style.color = "#ffffff";
		document.getElementById("e").disabled = true; 
		
	})

	btnG.addEventListener("click", function(){
		document.getElementById("g").style.background = "#008000";
		document.getElementById("g").style.color = "#ffffff";
		document.getElementById("h").disabled = true; 
		
	})

	btnH.addEventListener("click", function(){
		document.getElementById("h").style.background = "#cc2900";
		document.getElementById("h").style.color = "#ffffff";
		document.getElementById("g").disabled = true; 
	})

	btnI.addEventListener("click", function(){
		document.getElementById("i").style.background = "#cc2900";
		document.getElementById("i").style.color = "#ffffff";
		document.getElementById("j").disabled = true; 
	})

	btnJ.addEventListener("click", function(){
		document.getElementById("j").style.background = "#008000";
		document.getElementById("j").style.color = "#ffffff";
		document.getElementById("i").disabled = true; 
		
	})

	btnL.addEventListener("click", function(){
		document.getElementById("l").style.background = "#cc2900";
		document.getElementById("l").style.color = "#ffffff";
		document.getElementById("m").disabled = true; 
	})
	
	btnM.addEventListener("click", function(){
		document.getElementById("m").style.background = "#008000";
		document.getElementById("m").style.color = "#ffffff";
		document.getElementById("l").disabled = true; 
		
	})

	
