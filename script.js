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
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.toggle('selected');
  color.classList.add('selected');
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
}

function paintPixel(pixel) {
  const selectedColor = document.querySelector('.selected');
  pixel.style.backgroundColor = selectedColor.style.backgroundColor;
}

function capturaEvento(elementoHTML, tipoDeEvento, acaoDoEvento, filhoSomente = false) {
  const elementoPai = document.getElementById(elementoHTML);
  elementoPai.addEventListener(tipoDeEvento, (eventoDisparado) => {
    if (filhoSomente) {
      if (eventoDisparado.target !== elementoPai) {
        acaoDoEvento(eventoDisparado.target);
      }
    } else {
      acaoDoEvento(eventoDisparado.target);
    }
  });
}

capturaEvento('generate-board', 'click', validityInput);
capturaEvento('color-palette', 'click', selectColor, true);
capturaEvento('pixel-board', 'click', paintPixel, true);
capturaEvento('clear-board', 'click', clearBoard);
capturaEvento('novas-cores', 'click', generateColors);

window.onload = () => {
  generateColors();
  inicializaBoard();
};
