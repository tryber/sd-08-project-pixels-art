// Cria a paleta de cores
const colorPaletteContainer = document.getElementById('color-palette');
const colors = ['black', 'red', 'green', 'blue'];
for (let color = 0; color < colors.length; color += 1) {
  const colorPalette = document.createElement('div');
  colorPalette.className = 'color';
  if (colors[color] === 'black') {
    colorPalette.className = 'color selected';
  }
  colorPalette.style.backgroundColor = colors[color];
  colorPaletteContainer.appendChild(colorPalette);
}

// Cria o quadro de pixels
const boardSize = 5;
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

// Selecionar a cor da peleta
document.addEventListener('click', function (event) {
  let selectedColor = document.querySelector('.selected');
  selectedColor.className = 'color';
  if (event.target.classList.contains('color')) {
    event.target.className = 'color selected';
  }
});
