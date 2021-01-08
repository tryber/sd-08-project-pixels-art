const createColorPalette = (n) => {
  const colorPaletteContainer = document.getElementById('color-palette');
  let colors = [`rgb(0, 0, 0)`];
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
    if (colors[color] === 'rgb(0, 0, 0') {
      colorPalette.className = 'color selected';
    }
    colorPalette.style.background = colors[color];
    colorPaletteContainer.appendChild(colorPalette);
  }
}
createColorPalette(4)

const generateBoard = (n) => {
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
generateBoard(5)


document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.className = 'color';
    event.target.className = 'color selected';
  }
  if (event.target.classList.contains('pixel')) {
    const aplyColor = document.querySelector('.selected').style.background;
    event.target.style.background = aplyColor;
  }
  if (event.target.classList.contains('btn-clear')) {
    const pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.background = 'white';
    }
  }
  if (event.target.classList.contains('generate-board')) {
    const numberOfPixel = document.getElementById('board-size').value;
    const boardSize = numberOfPixel === '' ? alert('Boar inválido') : numberOfPixel < 5 ? numberOfPixel = 5 : numberOfPixel > 50 ? numberOfPixel = 50 : numberOfPixel;
    const board = document.getElementById('pixel-board');
    board.innerHTML = '';
    generateBoard(numberOfPixel)
  }
});

