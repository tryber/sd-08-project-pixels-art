// Create board
let boardSize = 5;
function createPixels(n) {
  const boardSize = n;
  const pixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < boardSize; line += 1) {
    const pixelLine = document.createElement('div');

    pixelBoard.appendChild(pixelLine);

    for (let index = 0; index < boardSize; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';

      pixelLine.appendChild(pixel);
    }
  }
}
createPixels(5);

// Create a responsive board
function responsiveBoard(edgeSize) {
  edgeSize = document.getElementById('board-size').value;
  if (edgeSize === '') {
    alert('Board inválido!');
  } else if (edgeSize < 5) {
    boardSize = 5;
  } else if (edgeSize > 50) {
    boardSize = 50;
  } else {
    boardSize = edgeSize;
  }
  const deleteOldBoard = document.getElementById('pixel-board');
  deleteOldBoard.innerHTML = '';
// Truque que eu vi no pull request do Massaki.
  createPixels(boardSize);
}

const newBoardSize = document.getElementById('generate-board');
newBoardSize.addEventListener('click', responsiveBoard);

// Clear the board
function clearBoard() {
  for (let index = 0; index < (boardSize ** 2); index += 1) {
    const turnWhite = document.getElementsByClassName('pixel')[index];
    turnWhite.style.backgroundColor = 'white';
  }
}

const clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click', clearBoard);

// Random palette
function generateNewPalette() {
  const colors = [];
  for (let index = 0; index < 3; index += 1) {
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    const color = `rgb(${a} , ${b} , ${c})`;

    colors.push(color);
  }
  document.getElementById('second').style.backgroundColor = colors[0];
  document.getElementById('third').style.backgroundColor = colors[1];
  document.getElementById('fourth').style.backgroundColor = colors[2];
// Usei esse link para consertar meus erros ao fazer uma cor aleatória aqui: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
}
generateNewPalette();


// Select a color
function selectColor(clickOnColor) {
  const findSelected = document.querySelector('.selected');
  findSelected.classList.remove('selected');

  const chosen = clickOnColor.target.id;
  const chosenColor = document.getElementById(chosen);
  chosenColor.classList.add('selected');
}

const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', selectColor);

// Paint a pixel
function paintPixel(event) {
  const chosen = document.querySelector('.selected');
  const color = window.getComputedStyle(chosen).getPropertyValue('background-color');

  event.target.style.backgroundColor = color;
// Aprendi usando esse link que foi uma dica no slack. https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
}

const paint = document.getElementById('pixel-board');
paint.addEventListener('click', paintPixel);
