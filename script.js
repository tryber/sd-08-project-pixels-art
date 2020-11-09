const getPixelBoard = document.getElementById('pixel-board');
let getColor = document.getElementsByClassName('color');
let blackColor = document.getElementById('black');

let createPixelBoard = () => {
  for (let i = 0; i < 5; i += 1) {
    const createPixel = document.createElement('div');
    getPixelBoard.appendChild(createPixel);
    for (let j = 0; j < 5; j += 1) {
      const createPixel = document.createElement('div');
      getPixelBoard.appendChild(createPixel);
      createPixel.className = 'pixel';
    }
  }
};
createPixelBoard();

let setBlackColor = () => {
  blackColor.classList.add('selected');
};
setBlackColor();
