window.onload = function (){
    document.querySelector('.color').classList.add('selected');
}

function createDivs(){
let colors = ["black", "blue", "green", "yellow"];
let colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener("click", function (event) {
    let unselectColor = document.querySelector(".selected");
    unselectColor.classList.remove("selected");
    event.target.classList.add("selected");
})
for (let index = 0; index < colors.length; index += 1) {
    let divColor = colors[index];
    let myDivs = document.createElement('div');
    colorPalette.appendChild(myDivs);
    myDivs.className = 'color';    
    myDivs.style.backgroundColor = divColor;
}
}
createDivs();

function createPixelsBox(){
    let pixelsBox = document.getElementById("pixel-board");
    for (let coluns = 0; coluns < 5; coluns += 1) {
        let colunsPixels = document.createElement('div');
        pixelsBox.appendChild(colunsPixels);
        for(let lines = 0; lines < 5; lines += 1) {
        let linesPixels = document.createElement('div');
        pixelsBox.appendChild(linesPixels);
        linesPixels.className = 'pixel';
    }
}
}    
createPixelsBox()

function paintPixel(){
  let selectedPixel = document.querySelectorAll(".pixel");
  for (let index = 0; index < selectedPixel.length; index += 1){;
  selectedPixel[index].addEventListener("click", function (event){
    let selectedColor = document.querySelector(".selected").style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  });  
}
}
paintPixel();

function clearButton(){
    let button = document.getElementById("clear-board");
    button.addEventListener("click", function(event){
    let pixelsBox = document.querySelectorAll(".pixel");
    for(let index = 0; index < pixelsBox.length; index += 1){
     pixelsBox[index].style.backgroundColor = "white";   
    }
    });  
}
clearButton();



    
   


