window.onload = function () {
    document.querySelector('.color').className = 'color selected'
}

function pixelBoard () {
  let divBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < 26; index += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divBoard.appendChild(divPixel);
  }
}
pixelBoard();