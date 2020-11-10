window.onload = function () {
  const palleteColorsList = document.querySelectorAll('.color');
  palleteColorsList[0].className += ' selected'
}

function createPalette() {
  const palleteColorsList = document.querySelector('#color-palette');
  const colorArray = ['black', 'red', 'green', 'blue'];
  for (let i = 0; i < colorArray.length; i += 1) {
    const colorElement = document.createElement('li');
    colorElement.className = 'color';
    //colorElement.id = `colorPalette ${i+1}`;
    colorElement.style.backgroundColor = colorArray[i];
    palleteColorsList.appendChild(colorElement);
  }
}

createPalette();

function createBoardPixel() {
  const board = document.querySelector('#pixel-board');
  for(let index = 1; index <= 5; index += 1) {
    const lineBoardElement = document.createElement('div');
    lineBoardElement.id = `line ${index}`;
    lineBoardElement.className = 'lines';
    for (let i = 0; i < 5; i += 1) {
      const squarePixel = document.createElement('div');
      squarePixel.className = 'pixel';
      lineBoardElement.appendChild(squarePixel);
    }
    board.appendChild(lineBoardElement);
  }
}

createBoardPixel();

function paletteColorSelected() {
  const paletteColors = document.querySelector('#color-palette');
  paletteColors.addEventListener('click', colorSelected);
  function colorSelected(eventColor) {
    const colors = document.querySelectorAll('.color')
    for (let element of colors) {
      element.className = 'color';
    }
    eventColor.target.className = 'color selected';
  }
}

paletteColorSelected();

const board = document.querySelector('#pixel-board');
board.addEventListener('click', paintPixel);
//console.log(board);
function paintPixel(eventPixel) {
  const pixelSelected = document.querySelector('.selected');
  if (eventPixel.target.style.backgroundColor == pixelSelected.style.backgroundColor)
    eventPixel.target.style.backgroundColor = 'white';
  else
  eventPixel.target.style.backgroundColor = pixelSelected.style.backgroundColor;
}