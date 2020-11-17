let paletaDaCorDoContainer = document.getElementById('color-palette');
let cores = ['black', 'green', 'red', 'yellow'];
for (let corDoContainer of cores) {
  let corDaPaleta = document.createElement('div');
  corDaPaleta.className = 'color';
  corDaPaleta.style.backgroundColor = corDoContainer
  paletaDaCorDoContainer.appendChild(corDaPaleta);
}

let boardSize = 5;
let pixelBoard = document.getElementById('pixel-board');
for (let row = 0; row < boardSize; row += 1) {
  let pixelRow = document.createElement('div');
  pixelRow.className = 'pixel-row';
  pixelBoard.appendChild(pixelRow);
  let pixelCells = document.getElementsByClassName('pixel-row');
  for (let cell = 0; cell < boardSize; cell += 1) {
    let pixelCellContainer = pixelCells[row];
    let pixelCell = document.createElement('div');
    pixelCell.className = 'pixel';
    pixelCellContainer.appendChild(pixelCell);
  }
}