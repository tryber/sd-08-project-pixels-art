const colorPalette = document.getElementById('color-palette');

// Um array com várias cores aleatórias
const colors = [];
for (let i = 0; i < 3; i++) {
  let currentColor = null;
  do {
    currentColor = getRandomColor();
  } while (colors.includes(currentColor) || currentColor === '#ffffff');
  colors.push(currentColor);
}

// A primeira cor do palete deve ser preto
colors.unshift('#000000');

// Cria um elemento para cada cor
for (let i = 0, len = colors.length; i < len; i++) {
  const li = document.createElement('li');
  li.className = 'color';
  li.style.backgroundColor = colors[i];
  colorPalette.appendChild(li);
}

// Gera uma cor aleatória
function getRandomColor() {
  let hexset = '0123456789abcdef'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexset.length);
    color += hexset[index];
  }
  return color;
}

const pixelBoardContainer = document.getElementById('pixel-board-container');
const pixelBoardSize = document.getElementById('pixel-board-size');
let boardSize = parseInt(pixelBoardSize.value);

function createPixelBoard() {
  const pixelBoard = document.createElement('div');
  pixelBoard.className = 'pixel-board';
  for(let i = 0; i < boardSize; i++) {
    const pixelRow = createPixelRow();
    pixelBoard.appendChild(pixelRow);
  }
  return pixelBoard;
}

function createPixelRow() {
  const row = document.createElement('div');
  row.className = 'pixel-row';
  for (let i = 0; i < boardSize; i += 1) {
    const pixel = createPixel();
    row.appendChild(pixel);
  }
  return row;
}

function createPixel() {
  const pixel = document.createElement('span');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  return pixel;
}

// Cria a primeira pixelBoard e adiciona no container
let pixelBoard = createPixelBoard();
pixelBoardContainer.appendChild(pixelBoard);

// Cada vez que o tamanho mudar cria uma pixelBoard nova
// e substitui pela antiga
pixelBoardSize.addEventListener('change', function() {
  boardSize = parseInt(pixelBoardSize.value);
  const newPixelBoard = createPixelBoard();
  pixelBoardContainer.replaceChild(newPixelBoard, pixelBoard);
  pixelBoard = newPixelBoard;
  addColorClickEvent();
});

// A primeira cor do palete deverá estar selecionada
const primeiraCor = document.querySelector('.color');
primeiraCor.classList.add('selected');


// Adiciona evento de click para selecao de cor no palete
for (let i = 0; i < cores.length; i += 1) {
  const cor = cores[i];
  cor.addEventListener('click', selectColor);
}

function selectColor(event) {
  const cores = document.querySelectorAll('.color');
  for (let i = 0; i < cores.length; i++) {
    const cor = cores[i];
    if (cor !== event.target && cor.classList.contains('selected')) cor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

// Adiciona evento de click para colorir os pixels
function addColorClickEvent() {
  const pixels = document.querySelectorAll('.pixel');
  console.log('adding color click event on ', pixels);
  for (let i = 0; i < pixels.length; i++) {
    const pixel = pixels[i];
    pixel.addEventListener('click', function(event) {
      console.log('clicked');
      const selected = document.querySelector('.color.selected');
      event.target.style.backgroundColor = selected.style.backgroundColor;
    });
  }
}

addColorClickEvent();


// Botão para limpar o board
const buttonClearBoard = document.getElementById('clear-board');
buttonClearBoard.addEventListener('click', clearBoard);

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i++) {
    const pixel = pixels[i];
    pixel.style.backgroundColor = 'white';
  }
}