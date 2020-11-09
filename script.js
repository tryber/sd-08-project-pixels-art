// Paleta de cores - Adicionando as cores de forma dinâmica para evitar encadeamento de classes
function addPalletColor() {
  const paleta = document.querySelectorAll('.color');
  paleta[0].style.backgroundColor = 'black';
  paleta[1].style.backgroundColor = '#f7be4a';
  paleta[2].style.backgroundColor = '#ab8333';
  paleta[3].style.backgroundColor = '#6b5220';
}
addPalletColor();
//
// Criando quadro de pixels
//
const pixelBoard = document.getElementById('pixel-board');
function generatePixel() {
  for (let j = 0; j < 25; j += 1) {
    const colorizedPixel = document.createElement('div');
    colorizedPixel.className = 'pixel';
    pixelBoard.appendChild(colorizedPixel);
  }
}
generatePixel();
//
// Adicionando eventos para selecionar a cor da paleta
//
const p = document.getElementsByClassName('color');
for (let i = 0; i <= 3; i += 1) {
  p[i].addEventListener('click', function () {
    p[i].classList.add('selected');
    const indexClicked = i;
    for (let j = 0; j <= 3; j += 1) {
      if (j !== indexClicked) {
        p[j].className = 'color';
      }
    }
  });
}
//
// Adicionando evento de pintura nos pixels no pixelboard;
//
const pixelClicked = document.getElementsByClassName('pixel');
for (let i = 0; i < pixelClicked.length; i += 1) {
  pixelClicked[i].addEventListener('click', function () {
    pixelClicked[i].style.backgroundColor = document.querySelector('.color.selected').style.backgroundColor;
  });
}
