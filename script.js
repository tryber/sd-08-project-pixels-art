const colorPalette = document.getElementById('color-palette');

const colors = [];
for (let i = 0; i < 3; i++) {
  let currentColor = null;
  do {
    currentColor = getRandomColor();
  } while (colors.includes(currentColor) || currentColor === '#ffffff');
  colors.push(currentColor);
}

colors.unshift('#000000');

for (let i = 0, len = colors.length; i < len; i++) {
  const li = document.createElement('li');
  li.className = 'color';
  li.style.backgroundColor = colors[i];
  colorPalette.appendChild(li);
}

function getRandomColor() {
  let hexset = '0123456789abcdef'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexset.length);
    color += hexset[index];
  }
  return color;
}

const pixelBoard = document.getElementById('pixel-board');
const pixelBoardSize = document.getElementById('pixel-board-size')
const numberOfPixels = Math.pow(pixelBoardSize, 2);

for(let i = 0; i < 25; i++) {
  const pixel = document.createElement('span');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixel);
}

const cores = document.querySelectorAll('.color');
cores[0].classList.add('selected');

cores.forEach(cor => cor.addEventListener('click', selectColor));

function selectColor(event) {
  console.log('clicou na cor', this.style.backgroundColor);
  for (let i = 0; i < cores.length; i++) {
    const cor = cores[i];
    if (cor !== event.target && cor.classList.contains('selected')) cor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

const pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i++) {
  const pixel = pixels[i];
  pixel.addEventListener('click', function(event) {
    const selected = document.querySelector('.color.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
  });
}

const buttonClearBoard = document.getElementById('clear-board');
buttonClearBoard.addEventListener('click', clearBoard);

function clearBoard() {
  for (let i = 0; i < pixels.length; i++) {
    const pixel = pixels[i];
    pixel.style.backgroundColor = 'white';
  }
}