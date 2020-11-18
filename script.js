let boardSize = 5;

// Create board
function createPixels() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < boardSize; line +=1) {
    const pixelLine = document.createElement('div');

    pixelBoard.appendChild(pixelLine);
    
    for (let index = 0; index < boardSize; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';

    pixelLine.appendChild(pixel);
    }
  }
}
createPixels();

// Select a color
function selectColor(clickOnColor) {
  findSelected = document.querySelector('.selected');
  findSelected.classList.remove('selected');

  chosen = clickOnColor.target.id;
  chosenColor = document.getElementById(chosen);
  chosenColor.classList.add('selected');
}

let colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', selectColor);

// Clear the board
function clearBoard() {
  for (let index = 0; index < (boardSize ** 2); index += 1) {
    const turnWhite = document.getElementsByClassName('pixel')[index];
    turnWhite.style.backgroundColor = 'white';
  }
}

const clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click', clearBoard);
