// Requirements 2 and 3:
const colors = ['black', 'red', 'yellow', 'blue'];
const colorPalette = document.querySelectorAll('.color');

function fillingInPalette() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor = colors[index];
  }
}
fillingInPalette();

// Requirements 4 and 5
const pixelBoard = document.getElementById('pixel-board');

function createPixels(width) {
  const pixelsTotal = width ** 2;

  for (let index = 0; index < pixelsTotal; index += 1) {
    const pixel = document.createElement('button');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
  }
}

createPixels(5);

// Requirement 6
let selectedColor = document.getElementById('color1');

// Requirement 7
const paletteColors = document.querySelectorAll('.color');

function switchSelectedColor(event) {
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
  selectedColor = event.target;
}

for (const colorInPalette of paletteColors) {
  colorInPalette.addEventListener('click', switchSelectedColor);
}

// Requirement 8
function paintPixel(event) {
  const pickedColor = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = pickedColor;
}

const allPixels = document.querySelectorAll('.pixel');
for (let pixel = 0; pixel < allPixels.length; pixel += 1) {
  allPixels[pixel].addEventListener('click', paintPixel);
}

// Requirement 9
function clearPixels() {
  for (let pixel = 0; pixel < allPixels.length; pixel += 1) {
    allPixels[pixel].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearPixels);
