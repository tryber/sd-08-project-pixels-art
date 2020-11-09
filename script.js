window.onload = function () {  
  // Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
  let blackElement = document.getElementById('color-pallet0');
  blackElement.className = 'color selected';
  // Fim do exercício 6

  // Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
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
  // Fim do exercício 7

  // Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
  const divPixelBoard = document.getElementById('pixel-board');
  
  divPixelBoard.addEventListener('click', setColor);

  function setColor(event) {
    event.target.style.backgroundColor = document.querySelector('.color.selected').style.backgroundColor;    
  }
  // Fim do exercício 8

  // Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
  const btnClear = document.getElementById('clear-board');
    
  btnClear.addEventListener('click', clearBoard);

  function clearBoard() {
    const pixelColorList = document.querySelectorAll('.pixel');
    for (let color = 0; color < pixelColorList.length; color += 1) {
      pixelColorList[color].style.backgroundColor = "white";
    }
  }
  // Fim do exercício 9

  // Faça o quadro de pixels ter seu tamanho definido pelo usuário.
  const btnGenerateBoard = document.getElementById('generate-board');
  const txtBoardSize = document.getElementById('board-size');
 
  btnGenerateBoard.addEventListener('click', generateBoard);

  function generateBoard() {
    if (txtBoardSize.value === '') {
      alert('Board inválido!');
    } else if (txtBoardSize.value < 5) {
      txtBoardSize.value = 5;
    } else if (txtBoardSize.value > 50) {
      txtBoardSize.value = 50;      
    }
    removeBoard();
    createBoard(txtBoardSize.value);
    clearBoard();    
  }

  function removeBoard() {
    let size = pixelBoard.children.length;
    for (let index = 0; index < size; index += 1) {
      pixelBoard.removeChild(pixelBoard.firstElementChild);
    }
  }
  //Fim do exercício 10
};

// A página deve possuir uma paleta de quatro cores distintas.
const colorPaletteContainer = document.getElementById('color-palette');
const colors = ['black', 'red', 'green', 'blue'];

function createColorPalette(colors) {
  for (let paletteColor = 0; paletteColor < colors.length; paletteColor += 1) {
    let colorPalette = document.createElement('div');
    colorPalette.id = `color-pallet${paletteColor}`  
    colorPalette.className = 'color';
    colorPalette.style.backgroundColor = colors[paletteColor];
    colorPaletteContainer.appendChild(colorPalette);
  }
}

createColorPalette(colors);
// Fim do exercício 2

// A página deve possuir um quadro de pixels, com 25 pixels.
const boardSize = 5;
const pixelBoard = document.getElementById('pixel-board');

function createBoard(boardSize) {
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
}

createBoard(boardSize);
//Fim do exercício 4