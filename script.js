window.onload = function () {  
  //Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
  let blackElement = document.getElementById('color-pallet0');
  blackElement.className = 'color selected';
  //Fim do exercício 6

  //Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
  const divColorPallet = document.getElementById('color-palette');
  const colorList = document.querySelectorAll('.color');

  divColorPallet.addEventListener('click', selectColor);

  function selectColor(event) {
    removeColorSelection();
    event.target.className = "color selected";
  }

  function removeColorSelection() {
    for (let color = 0; color < colorList.length; color += 1) {
      colorList[color].className = "color";
    }
  }
  //Fim do exercício 7

  //Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
  const divPixelBoard = document.getElementById('pixel-board');
  
  divPixelBoard.addEventListener('click', setColor);

  function setColor(event) {
    event.target.style.backgroundColor = document.querySelector('.color.selected').style.backgroundColor;    
  }
  //Fim do exercício 8

};

// Cria a paleta de cores
const colorPaletteContainer = document.getElementById('color-palette');
const colors = ['black', 'red', 'green', 'blue'];
for (let paletteColor = 0; paletteColor < colors.length; paletteColor += 1) {
  const colorPalette = document.createElement('div');
  colorPalette.id = `color-pallet${paletteColor}`  
  colorPalette.className = 'color';
  colorPalette.style.backgroundColor = colors[paletteColor];
  colorPaletteContainer.appendChild(colorPalette);
}

// Cria o quadro de pixels
const boardSize = 5;
const pixelBoard = document.getElementById('pixel-board');
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