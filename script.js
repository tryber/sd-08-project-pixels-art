function createDivPalette() {
  const paletteColor = document.getElementById('color-palette');
  for (let index = 1; index <= 4; index += 1) {
    let paletteDiv = document.createElement('div');
    paletteDiv.className = 'color';
    paletteColor.appendChild(paletteDiv);
  }
}
createDivPalette();

function createDivPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 1; index <= 25; index += 1) {
    let pixelDivs = document.createElement('div');
    pixelDivs.className = 'pixel';
    pixelBoard.appendChild(pixelDivs);
  }
}
createDivPixelBoard();

function styleColors() {
  const paletteColors = document.getElementsByClassName('color');
  paletteColors[0].style.backgroundColor = 'black';
  paletteColors[1].style.backgroundColor = 'yellow';
  paletteColors[2].style.backgroundColor = 'orange';
  paletteColors[3].style.backgroundColor = 'red';
}
styleColors();

let getColor = document.getElementsByClassName('color');

function firstColor(){
  getColor[0].classList.add('selected');
}
firstColor();

function eventSelected (event){
  let elementSelected = document.querySelector('.selected');
  elementSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function addEventSelected(){
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].addEventListener('click', eventSelected);
  }
}
addEventSelected();

function paintingPixels() {
let paintingPixels = document.getElementById('pixel-board');
  paintingPixels.addEventListener('click', function (event){
    let colorSelected = document.querySelector('.color.selected').style.backgroundColor;
    event.target.style.backgroundColor = colorSelected;
  });
}
paintingPixels();

function clearButton(){
let arrayPixels = document.getElementsByClassName('pixel');
  for (let indexClear = 0; indexClear < arrayPixels.length; indexClear += 1){
    arrayPixels[indexClear].style.backgroundColor = 'white';
  }
}
clearButton();

let button = document.getElementById('clear-board');
button.addEventListener('click', clearButton);
