const getPixelBoard = document.getElementById('pixel-board');

let createPixelBoard = () => {
  for (let i = 0; i < 25; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    getPixelBoard.appendChild(createPixel);
  }
};
createPixelBoard();
