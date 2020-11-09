function title() {
  const titleH1 = document.querySelector('h1');
  titleH1.id = 'title';
  titleH1.innerText = 'Paleta de Cores';
}

title();

const paleteList = document.querySelector('#color-palette');

function addItemPalette() {
  for (let index = 0; index < 4; index += 1) {
    const colorItem = document.createElement('li');
    colorItem.className = 'color';
    paleteList.appendChild(colorItem);
  }
}

addItemPalette();

const itemPalette = document.querySelectorAll('.color');

function addColorPalette(colors) {
  for (let index = 0; index < itemPalette.length; index += 1) {
    const color = itemPalette[index];
    color.style.backgroundColor = colors[index];
  }
}

addColorPalette(['black', 'red', 'green', 'orange']);

const board = document.querySelector('#pixel-board');

function pixelBoard() {
  for (let index = 0; index < 25; index += 1) {
    const pixelItem = document.createElement('li');
    pixelItem.className = 'pixel';
    board.appendChild(pixelItem);
  }
}

pixelBoard();
