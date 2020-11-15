// Collor Palette
const colorPalette = document.getElementById('color-palette');
const colorsArray = ['black', 'yellow', 'orange', 'red'];

colorsArray.forEach(function (color) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'color';
  button.style.height = '40px';
  button.style.width = '40px';
  button.style.backgroundColor = color;
  button.style.border = '1px solid #000';
  button.addEventListener('click', handler(button));
  colorPalette.appendChild(button);
});

window.onload = function () {
  document.querySelectorAll('.color')[0].classList.add('selected');
};

function handler(button) {
  return function() {
    pixelBoard.style.backgroundColor = button.value;
  };
}

// Pixel Board
function createPixelBoard () {
  const pixelBoard = document.getElementById('pixel-board');

  for (let column = 0; column < 5; column += 1) {
    const pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    for (let row = 0; row < 5; row += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
    }
  }
}
createPixelBoard();

// Paint every pixel
function paintPixel() {
  const pixelSelected = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelSelected.length; index += 1) {
    pixelSelected[index].addEventListener('click', function (event) {
      const colorCurrent = document.querySelector('.selected').style.backgroundColor;
      event.target.style.backgroundColor = colorCurrent;
    });
  }
}
paintPixel();

function createEventsColor(event) {
  const colorClass = document.querySelector(".selected");
  colorClass.classList.remove("selected");
  event.target.classList.add("selected");
}

// Clear button
const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', clearPixels);
function clearPixels() {
  const boxPixels = document.querySelectorAll('.pixel');
  boxPixels.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
}
