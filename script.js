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
let newButton = document.getElementsByClassName("color");
//requisito 7
function createNewButton () {
   for(let index = 0; index < newButton.length; index += 1) {
      newButton[index].addEventListener("click", paletteButton);
   }  
}
createNewButton();
function paletteButton (event) {
   
   for(let index = 0; index < newButton.length; index += 1) {
      newButton[index].className = "color" 
   }
   event.target.className = "color selected";
}

//requisito 9

let arrayOfPixels = document.getElementsByClassName("pixel");
function paddingPixel () {
   for(let index = 0; index < arrayOfPixels.length; index += 1) {
      arrayOfPixels[index].addEventListener("click", paddingColor);
   }
}
paddingPixel();

function paddingColor (event) {
      let colorSelected = document.querySelector(".selected");
      let newColor = colorSelected.id;
      event.target.style.backgroundColor = newColor;
   console.log(colorSelected)
}


//



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

