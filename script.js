const getPixelBoard = document.getElementById('pixel-board');
let getColor = document.querySelector('.black');
let colorSelected = document.querySelectorAll('.color');

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
  getColor.classList.add('selected');
};
setBlackColor();

let changePalette = (event) => {
  getColor.classList.remove('selected');
  event.target.classList.add('selected');
  getColor = event.target;
}

for (let colors of colorSelected) {
  colors.addEventListener('click', changePalette);
}