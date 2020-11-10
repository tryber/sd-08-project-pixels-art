// Sets reference to color palette div
const palette = document.querySelector('.palette');

// Sets reference do pixel board
const board = document.querySelector('.pixel-board');

// Sets reference to buttons
const clearButton = document.querySelector('#clear-board');
const genButton = document.querySelector('#generate-board');
const colorGenButton = document.querySelector('#regen-colors');

// sets boardSize default value
let boardSize = 5;

// Sets reference select color picker divs
const blackColor = document.querySelector('.black');
const firstColor = document.querySelector('.first');
const secondColor = document.querySelector('.second');
const thirdColor = document.querySelector('.third');

// Sets a nodeList wth all color picker divs
const colorList = document.querySelectorAll('.color');

// Sets and select blackColor
blackColor.style.backgroundColor = 'black';
blackColor.classList.add('selected');

// Color randomizer
function randomColor() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Sets other colors to randomized colors
function setColors() {
  firstColor.style.backgroundColor = randomColor();
  secondColor.style.backgroundColor = randomColor();
  thirdColor.style.backgroundColor = randomColor();
}

setColors();

colorGenButton.addEventListener('click', setColors);

// Removes 'selection' class from all pallete elements
function removeSelection() {
  for (let i = 0; i < colorList.length; i += 1) {
    colorList[i].classList.remove('selected');
  }
}

// Returns the color of the selected element
function parseSelection() {
  for (let i = 0; i < colorList.length; i += 1) {
    if (colorList[i].classList.contains('selected')) {
      return colorList[i].style.backgroundColor;
    }
  }
  return '';
}

// Adds 'selection' class to the targeted element
function selectColor(event) {
  const eventTarget = event.target;
  if (eventTarget.className !== 'palette') {
    removeSelection();
    eventTarget.classList.add('selected');
  }
}

palette.addEventListener('click', selectColor);

// Applies color of the selected element to targeted element
function applyColor(event) {
  const eventTarget = event.target;
  const color = parseSelection();
  eventTarget.style.backgroundColor = color;
}

board.addEventListener('click', applyColor);

// Removes added colors from pixels
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].removeAttribute('style');
  }
}

clearButton.addEventListener('click', clearBoard);

// Removes all board children when called
function removeBoard() {
  const lines = board.children;
  for (let i = 0; lines[i];) {
    board.removeChild(lines[i]);
  }
}

// Stores input value and corrects it if input < 5 or > 50
function valueStorage() {
  const input = document.querySelector('#board-size');
  const storedValue = parseInt(input.value, 10);
  boardSize = storedValue;
  if (boardSize < 5) {
    input.value = '5';
    boardSize = 5;
  } else if (boardSize > 50) {
    input.value = '50';
    boardSize = 50;
  }
}

// Generates blocks within line
function blockGen(n) {
  for (let i = 0; i < n; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    board.lastElementChild.appendChild(div);
  }
}

// Generates lines
function lineGen(n) {
  for (let i = 0; i < n; i += 1) {
    const div = document.createElement('div');
    div.className = 'line';
    board.appendChild(div);
    blockGen(n);
  }
}

// Generates initial board
lineGen(5);

// Generates a new board with input value as size
function regenBoard() {
  removeBoard();
  lineGen(boardSize);
}

// Board size input validator
function regenPress() {
  valueStorage();
  if (!boardSize) {
    return alert('Board inválido!');
  }
  return regenBoard();
}

// Regenerates board
genButton.addEventListener('click', regenPress);
