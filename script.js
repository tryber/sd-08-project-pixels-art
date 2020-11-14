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




    
   


