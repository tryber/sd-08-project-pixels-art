function generateRgb() {
  const code = [];
  for (let index = 0; index < 3; index += 1) {
    const randomNum = Math.random() * 254;
    code.push(Math.floor(randomNum));
  }
  return code.join(', ');
}

function generateColors() {
  const colorPalette = document.querySelectorAll('.color');
  colorPalette.forEach((color) => {
    color.style.backgroundColor = `rgb(${generateRgb()})`;
    colorPalette[0].style.backgroundColor = 'rgb(0 ,0 ,0)';
  });
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}

function fillLine(numPixel) {
  const row = document.createElement('div');
  row.className = 'pixel-row';
  for (let pixel = 0; pixel < numPixel; pixel += 1) {
    const newPixel = createPixel();
    row.appendChild(newPixel);
  }
  return row;
}

const boardSize = document.getElementById('board-size');

function generateBoard(n = boardSize.value) {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
  for (let line = 0; line < n; line += 1) {
    const lineFilled = fillLine(n);
    pixelBoard.appendChild(lineFilled);
  }
  boardSize.value = '';
}

function rangeBoard() {
  if (boardSize.value < 5) {
    boardSize.value = 5;
    generateBoard();
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
    generateBoard();
  } else {
    generateBoard();
  }
}

function validityCheckValue() {
  // Cause we can't attribute [min="5"]
  return (!boardSize.checkValidity() || boardSize.value < 5);
}
function validityInput() {
  if (boardSize.value === '') {
    alert('Board inválido!');
    // boardSize.value = 5;
  }
  if (validityCheckValue) {
    return rangeBoard();
  }
  return generateBoard();
}

function inicializaBoard(n = 5) {
  generateBoard(n);
}

function selectColor(color) {
  previousColor = document.querySelector('.selected');
  previousColor.classList.toggle('selected');
  color.classList.add('selected');
}

function capturaEvento(elementoHTML, tipoDeEvento, acaoDoEvento) {
  const elementoPai = document.getElementById(elementoHTML);
  elementoPai.addEventListener(tipoDeEvento, (eventoDisparado) => {
    acaoDoEvento(eventoDisparado.target);
  });
}

capturaEvento('generate-board', 'click', validityInput);
capturaEvento('color-palette', 'click', selectColor);

window.onload = () => {
  generateColors();
  inicializaBoard();
};
