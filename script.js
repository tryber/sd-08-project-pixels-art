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

function selectedPaletteBlack() {
  for (let index = 0; index < itemPalette.length; index += 1) {
    const item = itemPalette[index];
    if (item.style.backgroundColor === 'black') {
      item.className = 'color selected';
    }
  }
}

selectedPaletteBlack();

function selectedPalette() {
  for (let index = 0; index < itemPalette.length; index += 1) {
    const item = itemPalette[index];

    const selectedColor = document.querySelector('.selected');
    item.addEventListener('click', (event) => {
      if (item.className === 'color') {
        selectedColor.className = 'color';
        event.target.className = 'color selected';
      } else {
        event.target.className = 'color';
      }
    });
  }
}

selectedPalette();

function pixelColorOfSelectedPallete() {
  const pixelsBoard = document.querySelector('#pixel-board');

  pixelsBoard.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');

    if (selectedColor !== null) {
      event.target.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  });
}

pixelColorOfSelectedPallete();

function clearPixel() {
  const pixels = document.querySelectorAll('.pixel');
  const clearButton = document.querySelector('#clear-board');

  clearButton.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      const pixel = pixels[index];
      pixel.style.backgroundColor = 'initial';
    }
  });
}

clearPixel();
