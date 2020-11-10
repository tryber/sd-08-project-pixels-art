function createDivs(){
let colors = ["black", "blue", "green", "yellow"];
let colorPalette = document.getElementById('color-palette');
for (let index = 0; index < colors.length; index += 1) {
    let divColor = colors[index];
    let myDivs = document.createElement('div');
    colorPalette.appendChild(myDivs);
    myDivs.className = 'color';    
    myDivs.style.backgroundColor = divColor;
}
}
createDivs();

function createPixels(){
    let pixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < 25; index += 1){
        let pixel = document.createElement("div");
        pixelBoard.appendChild(pixel);
        pixel.className = "pixel";
    }
}
createPixels();
