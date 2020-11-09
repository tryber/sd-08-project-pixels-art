//Função para criar a paleta de cores
let colors = [' black', ' red', ' green', ' blue'];
function colorsPalete() {
  let divPaleta = document.getElementById('color-palette');
  for (i = 0; i < colors.length; i++) {
    let divColors = document.createElement('div');
    divPaleta.appendChild(divColors)
    divColors.className = 'color';
    divColors.className += colors[i];
  }
}
colorsPalete();

//Função para criar os elementos
function pixelBoard() {
  
  let divPixelBoard = document.getElementById('pixel-board');
  for (i = 0; i < 5; i++) {
    let divPixelsLinha = document.createElement('div');
    divPixelBoard.appendChild(divPixelsLinha);
    for (j = 0; j < 5; j++) {
      let divPixels = document.createElement('div');
      divPixelBoard.appendChild(divPixels);
      divPixels.className = 'pixel';
    };
  };
};
pixelBoard();

window.onload = function() {
  colors[0] += ' selected';
}
