// let divList = document.getElementById("color-palette");
// for(let index = 0; index < 4; index += 1) {
//    let newDivs = document.createElement("div");
//    newDivs[index];
//    divList.appendChild(newDivs);
//  } 
//  document.querySelectorAll[0]className = "color black";
//  document.querySelectorAll[1]className = "color red";
//  document.querySelectorAll[2]className = "color blue";
//  document.querySelectorAll[3]className = "color green";



window.onload = selectBlack;
function selectBlack() {
   let selectBlackPalette = document.getElementById("black");
   selectBlackPalette.className = "color selected"
}

// function createNewButton () {
//    let newButton = document.getElementById("black");
//     newButton.addEventListener("click", paletteButton);
// }

// function paletteButton () {
//    let enventHappening = document.querySelectorAll(".pixel");
//    for(let index = 0; index < enventHappening.length; index += 1) {
//     enventHappening[index].style.backgroundColor = "black"
// }



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


