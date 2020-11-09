const getPixelBoard = document.getElementById('pixel-board');
let getColor = document.getElementsByClassName('color');
let blackColor = document.getElementById('black');

let createPixelBoard = () => {
  for (let i = 0; i < 25; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    getPixelBoard.appendChild(createPixel);
  }
};
createPixelBoard();

let setBlackColor = () => {
  blackColor.classList.add('selected');
}
setBlackColor();