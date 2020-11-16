const colors = ['black', 'red', 'green', 'blue'];
const classColor = 'color';
const classColorSelected = 'color selected';

// Cria a paleta de cores
function creatColorPalette() {
    const colorPaletteList = document.getElementById("color-palette-list");
    for (let index = 0; index < colors.length; index += 1) {
        const color = document.createElement('li');
        color.className = 'color';
        color.style.background = colors[index];
        colorPaletteList.appendChild(color);
    }
}creatColorPalette();
// Adiciona a classe selected ao primeiro filho da ul
let ulFirstChild = document.querySelector('#color-palette-list>li');
ulFirstChild.className = 'color selected';
// Cria o pixel board
function creatPixelBoard() {
    const pixelBoardSize = 5;
    const pixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < pixelBoardSize; index += 1) {
        const lineList = document.createElement('ul');
        pixelBoard.appendChild(lineList);
        for (let indexItem = 0; indexItem < pixelBoardSize; indexItem += 1) {
            const pixel = document.createElement('li');
            pixel.className = 'pixel';
            lineList.appendChild(pixel);
        }
    }
}creatPixelBoard();
const palettes = document.querySelectorAll('.color');
// Remove e adiciona a classe Selected
function inputOutputSelected() {
    for (let index = 0; index < palettes.length; index += 1) {
        palettes[index].addEventListener('click',function(event){
            for (let i = 0; i < palettes.length; i += 1){
                palettes[i].classList = 'color';
            }
            event.target.classList.toggle('selected');
            console.log(palettes[index]);// Testando 
        });
    }
}inputOutputSelected();