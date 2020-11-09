// Cria a paleta de cores
const colorPaletteContainer = document.getElementById('color-palette');
const colors = ['black', 'red', 'green', 'blue'];
for (let color = 0; color < colors.length; color += 1) {
  const colorPalette = document.createElement('div');
  colorPalette.className = 'color';
  if (colors[color] === 'black') {
    colorPalette.className = 'color selected';
  }
  colorPalette.style.background = colors[color];
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

// Eventos
document.addEventListener('click', function (event) {
  // Seleciona a cor
  if (event.target.classList.contains('color')) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.className = 'color';
    event.target.className = 'color selected';
  }
  // Pinta o pixel com a cor selecionada
  if (event.target.classList.contains('pixel')) {
    const applyColor = document.querySelector('.selected').style.background;
    event.target.style.background = applyColor;
  }
  // Limpa o quadro
  if (event.target.classList.contains('btn-clear')) {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.background = 'white';
    }
  }
});


