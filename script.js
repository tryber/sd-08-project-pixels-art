let boardSize = 5;

function createPixels() {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < boardSize; index += 1) {
    for (let counter = 0; counter < boardSize; counter += 1) {
      const pixel = index;
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';

      pixelBoard.appendChild(pixelDiv);
    }
  }
}

createPixels();

function selectColor() {

}

function clearBoard() {
  for (let index = 0; index < (boardSize * boardSize); index += 1) {
    const turnWhite = document.getElementsByClassName('pixel')[index];
    turnWhite.style.backgroundColor = 'white';
  }
}

const clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click', clearBoard);
