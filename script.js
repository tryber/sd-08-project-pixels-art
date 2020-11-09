function initialColors () {
  let colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'blue';
  colors[2].style.backgroundColor = 'yellow';
  colors[3].style.backgroundColor = 'green';
}
initialColors();

function pixelBoard () {
  let divBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < 26; index += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divBoard.appendChild(divPixel);
  }
}
pixelBoard();