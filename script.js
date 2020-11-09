// Cria a paleta de cores
let colorPaletteContainer = document.getElementById("color-palette");
let colors = ["black", "red", "green", "blue"];
for (let backColor of colors) {
  let colorPalette = document.createElement("div");
  colorPalette.className = "color";
  colorPalette.style.backgroundColor = backColor;
  colorPaletteContainer.appendChild(colorPalette);
}

// Cria o quadro de pixels
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
