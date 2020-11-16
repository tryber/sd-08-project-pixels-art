window.onload = function () {
    document.querySelector('.color').className = 'color selected'
}

function initialColors () {
  let colors = document.querySelectorAll('.color');
  
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'blue';
  colors[2].style.backgroundColor = 'red';
  colors[3].style.backgroundColor = 'yellow';
}
initialColors();

function pixelBoard () {
  let divBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < 26; index += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divBoard.appendChild(divPixel);
  }
}
pixelBoard();

let ulColor = document.querySelector("#color-palette");
let color = ulColor.childNodes;

function removeSelected(){
    for (let index=0; index<color.length; index++){
        if (color[index].className == "color selected"){
            color[index].className = "color";
        }
    }
}

function addSelected(){    
    ulColor.addEventListener("click", function(event){                     
            removeSelected();            
            event.target.className = "color selected";       

    });     
}
addSelected();

let ulPixel = document.querySelector("#pixel-board");

function colorPixel(){    
    ulPixel.addEventListener("click", function(event){        
        let colorSelect = document.querySelector(".color.selected").style.backgroundColor;        
        event.target.style.backgroundColor = colorSelect;       
    });
}
colorPixel();

function cleanBoard() {
    let btnClean = document.querySelector('#clear-board');
    btnClean.addEventListener('click', function() {
        document.querySelectorAll('.pixel').forEach(function(item) {
            item.style.backgroundColor = 'white';
        });
    });
}
cleanBoard();