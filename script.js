
let colors = ['rgb( 0 , 0 , 0 )'];
let colorSelected = 'rgb( 0 , 0 , 0 )';
let boardSize = 25;

const palettePlayground = {
  paletteGenerator() {
    for (let palette = 0; palette < 3; palette += 1) {
      colors.push(this.colorGenerator());
    }

    if (new Set(colors).size !== colors.length) {
      colors = ['rgb( 0 , 0 , 0 )'];
      this.paletteGenerator();
    }

    this.paletteDivsGenerator();
  },
  colorGenerator() {
    let color;

    for (let rgb = 0; rgb < 3; rgb += 1) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      color = `rgb( ${r} , ${g} , ${b} )`;
    }

    return color;
  },
  paletteDivsGenerator() {
    const colorPalette = document.querySelector('#color-palette');

    for (let index = 0; index < colors.length; index += 1) {
      const div = document.createElement('div');
      const node = document.createTextNode('');
      div.appendChild(node);
      if (index === 0) {
        div.classList = 'color selected';
      } else {
        div.classList = 'color';
      }
      div.addEventListener('click', palettePlayground.selectColor);
      div.style.backgroundColor = colors[index];
      colorPalette.appendChild(div);
    }
  },
  selectColor(event) {
    colorSelected = event.target.style.backgroundColor;
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  },
};

palettePlayground.paletteGenerator();

const pixelBoardPlayground = {
  setNewBoardSize() {
    let inputSize = document.querySelector('#board-size').value;

    if (inputSize === null) {
      alert('Board inválido!');
    }

    inputSize = inputSize < 5 ? 5 : inputSize;
    inputSize = inputSize > 50 ? 50 : inputSize;

    boardSize = inputSize * inputSize;

    pixelBoardPlayground.pixelBoardGenerator();
  },
  pixelBoardGenerator() {
    const pixelBoard = document.querySelector('#pixel-board');

    pixelBoard.innerHTML = '';
    pixelBoard.style.gridTemplateColumns = `repeat(${Math.sqrt(boardSize)}, 40px)`;
    pixelBoard.style.gridTemplateRows = `repeat(${Math.sqrt(boardSize)}, 40px)`;

    for (let index = 0; index < boardSize; index += 1) {
      const pixel = document.createElement('div');
      const node = document.createTextNode('');
      pixel.appendChild(node);
      pixel.classList.add('pixel');
      pixel.addEventListener('click', pixelBoardPlayground.colorPixel);
      pixelBoard.appendChild(pixel);
    }
  },
  colorPixel(event) {
    event.target.style.backgroundColor = colorSelected;
  },
  clearBoard() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => { pixel.style.backgroundColor = 'rgb( 255 , 255 , 255 )'; });
  },
};

pixelBoardPlayground.pixelBoardGenerator();
