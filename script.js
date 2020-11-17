function createPixels() {
  let boardSize = 5;
  let pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < boardSize; index += 1) {
    for (let counter = 0; counter < boardSize; counter += 1) {
      let pixel = index;
      let pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';

      pixelBoard.appendChild(pixelDiv);
    }
    
  }
}

createPixels();

function selectColor() {
  
}