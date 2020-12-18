const createColorPalette = (n) => {
  const colorPaletteContainer = document.getElementById('color-palette');
  const colors = ['rgb(0, 0, 0)'];
  for (let numberOfColors = 0; numberOfColors < n - 1; numberOfColors += 1) {
    const r = Math.floor((Math.random() * 254) + 1);
    const g = Math.floor((Math.random() * 254) + 1);
    const b = Math.floor((Math.random() * 254) + 1);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colors.push(rgb);
  }
  for (let color = 0; color < colors.length; color += 1) {
    const colorPalette = document.createElement('div');
    colorPalette.className = 'color';
    if (colors[color] === 'rgb(0, 0, 0)') {
      colorPalette.className = 'color selected';
    }
    colorPalette.style.background = colors[color];
    colorPaletteContainer.appendChild(colorPalette);
  }
};

function generateBoard(n) {
  const boardSize = n;
  const pixelBoard = document.getElementById('pixel-board');
  for (let row = 0; row < boardSize; row += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    pixelBoard.appendChild(pixelRow);
    const pixelCells = document.getElementsByClassName('pixel-row');
    for (let cell = 0; cell < boardSize; cell += 1) {
      const pixelCellContainer = pixelCells[row];
      const pixelCell = document.createElement('div');
      pixelCell.className = 'pixel';
      pixelCellContainer.appendChild(pixelCell);
    }
  }
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('color')) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
  if (event.target.classList.contains('pixel')) {
    const applyColor = document.querySelector('.selected').style.background;
    event.target.style.background = applyColor;
  }
  if (event.target.classList.contains('btn-clear')) {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.background = 'white';
    }
  }
  if (event.target.classList.contains('generate-board')) {
    let numberOfPixels = document.getElementById('board-size').value;
    if (numberOfPixels === '') {
      alert('Board inválido!');
      return;
    }
    if (numberOfPixels < 5) {
      numberOfPixels = 5;
    } else if (numberOfPixels > 50) {
      numberOfPixels = 50;
    }
    const board = document.getElementById('pixel-board');
    board.innerHTML = ''; // Ideia vista no projeto da Bianca Caetano
    generateBoard(numberOfPixels);
  }
});

generateBoard(5);
createColorPalette(4);
