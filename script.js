// Requirements 2 and 3:
let colors = ['black', 'red', 'yellow', 'blue'];
let colorPalette = document.querySelectorAll('.color');

function fillingInPalette() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor = colors[index];
  }
}
fillingInPalette();

// Requirements 4 and 5
let pixelBoard = document.getElementById('pixel-board');

function createPixels(width) {
  let pixelsTotal = Math.pow(width, 2);

  for (let index = 0; index < pixelsTotal; index += 1) {
    let pixel = document.createElement('button');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
  }
}

createPixels(5);
