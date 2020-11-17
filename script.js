

//6 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.

function createButton () {
   let clearButton = document.getElementById("clear-board");
   
   clearButton.addEventListener("click", newEvent);
}
createButton();

function newEvent () {
   let enventHappening = document.querySelectorAll(".pixel");
   for(let index = 0; index < enventHappening.length; index += 1) {
    enventHappening[index].style.backgroundColor = "white";
   }
   
}

window.onload = selectBlack;
function selectBlack() {
  
}

