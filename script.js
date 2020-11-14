window.onload = function () {
    document.querySelector('.color').className = 'color selected'
}

function startColors () {
  let colors = document.querySelectorAll('.color');
  
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'blue';
  colors[2].style.backgroundColor = 'red';
  colors[3].style.backgroundColor = 'yellow';
}
startColors();

function createBoard () {
  let divBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < 26; index += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divBoard.appendChild(divPixel);
  }
}
createBoard();

let allColor = document.querySelector("#color-palette");
let color = allColor.childNodes;

function removeSelected(){
    for (let index=0; index<color.length; index++){
        if (color[index].className == "color selected"){
            color[index].className = "color";
        }
    }
}

function addSelected(){    
    allColor.addEventListener("click", function(event){                     
            removeSelected();            
            event.target.className = "color selected";       

    });     
}
addSelected();

let allPixel = document.querySelector("#pixel-board");

function colorPixel(){    
    allPixel.addEventListener("click", function(event){        
        let colorSelected = document.querySelector(".color.selected").style.backgroundColor;        
        event.target.style.backgroundColor = colorSelected;       
    });
}
colorPixel();

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", function () {
    let allPixels = document.querySelectorAll(".pixel");
    for (let index = 0; index < allPixels.length; index ++) {
        allPixels[index].style.backgroundColor = "white";
    }
});
  