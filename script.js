function createPalette() {
  const palleteColorsList = document.querySelector('#color-palette');
  const colorArray = ['black', 'red', 'green', 'blue'];
  for (let i = 0; i < colorArray.length; i += 1) {
    const colorElement = document.createElement('li');
    colorElement.className = 'color';
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





