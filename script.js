function generateRandomColor() {
  return `${Math.ceil(Math.random() * 254)} , ${Math.ceil(Math.random() * 254)}
   , ${Math.ceil(Math.random() * 254)}`;
}

function generatePalette(palette) {
  for (let i = 0; i < 4; i += 1) {
    const color = document.createElement('div');
    color.addEventListener('click', (event) => {
      for (let colPixel in palette.children) {
        palette.children[colPixel].className = 'color';
      }
      event.target.className = 'color selected';
    });

    if (palette.children.length === 0) {
      color.className = 'color selected';
      color.style.backgroundColor = 'black';
      palette.appendChild(color);
    } else {
      const colGen = generateRandomColor();

      color.className = 'color';
      color.style.backgroundColor = `rgb(${colGen})`;
      palette.appendChild(color);
    }
  }
}

function generateBoard(size, board) {
  for (let i = 0; i < size; i += 1) {
    const line = createLine(size);
    board.appendChild(line);
  }
}

function createLine(size) {
  let currentColor;
  const line = document.createElement('tr');
  line.className = 'pixel-line';

  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('td');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.addEventListener('click', (event) => {
      currentColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
      event.target.style.backgroundColor = currentColor;
    });

    line.appendChild(pixel);
  }

  return line;
}

function handleBigNumbers(size) {
  let newSize = size;
  if (newSize < 5) {
    newSize = 5;
  } else if (newSize > 50) {
    newSize = 50;
  }

  return newSize;
}

window.onload = () => {
  const board = document.getElementById('pixel-board');
  const palette = document.getElementById('color-palette');
  const clearButton = document.getElementById('clear-board');
  const updateSizeButton = document.getElementById('generate-board');
  const size = 5;

  generatePalette(palette);
  generateBoard(size, board);

  clearButton.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');

    for (let pix in pixels) {
      pixels[pix].style.backgroundColor = 'white';
    }
  });
  updateSizeButton.addEventListener('click', () => {
    let newSize = document.getElementById('board-size').value;

    if (!newSize) {
      alert('Board inválido!');
    } else {
      board.innerHTML = '';
      newSize = handleBigNumbers(newSize);
      generateBoard(newSize, board);
    }
  });
}
