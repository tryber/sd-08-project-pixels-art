function pixelInicial() {
  const pixelInicial = document.querySelector('#black');
  pixelInicial.className = 'color selected';
}
pixelInicial();

function pixelClass() {
  const pixelColor = document.querySelectorAll('.color');
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].addEventListener('click', function (event) {
      const pixelSelected = document.querySelector('.color.selected');
      pixelSelected.className = 'color';
      event.target.className = 'color selected';
    });
  }
}
pixelClass();

function pintaPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function (event) {
      const color = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
      event.target.style.backgroundColor = color;
    });
  }
}
pintaPixel();

function limpaPixels() {
  const button = document.getElementById('clear-board');
  const color = 'white';
  button.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = color;
    }
  });
}
limpaPixels();
