const getPixelBoard = document.getElementById('pixel-board');
let getColor = document.getElementsByClassName('color');

function createPixelBoard() {
  for (let i = 0; i < 5; i += 1) {
    const createPixel = document.createElement('div');
    getPixelBoard.appendChild(createPixel);
    for (let j = 0; j < 5; j += 1) {
      const createPixel = document.createElement('div');
      getPixelBoard.appendChild(createPixel);
      createPixel.className = 'pixel';
    }
  }
}
createPixelBoard();

function setFirstColor() {
  getColor[0].classList.add('selected');
}
setFirstColor();

function changePalette(event) {
  for (let i = 0; i < getColor.length; i += 1) {
    getColor[i].classList.remove('selected');
    event.target.classList.add('selected');
    getColor[i] = event.target;
  }
}

function clickColor() {
  for (const colors of getColor) {
    colors.addEventListener('click', changePalette);
  }
}
clickColor();

function setPixelColor() {
  let getPixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < getPixel.length; i += 1) {
    getPixel[i].addEventListener('click', function (event) {
      let getSelectedColor = window.getComputedStyle(
        document.querySelector('.color.selected')
      ).backgroundColor;
      event.target.style.backgroundColor = getSelectedColor;
    });
  }
}
setPixelColor();

function clearPixel() {
  const getClearButton = document.getElementById('clear-board');
  getClearButton.addEventListener('click', () => {
    const getPixels = document.getElementsByClassName('pixel');
    for (const pixel of getPixels) {
      pixel.style.backgroundColor = 'white';
    }
  });
}
clearPixel();
