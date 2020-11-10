const board = document.querySelector('#pixel-board');

let boardSide = 5;

const inputValue = () => {
  const input = document.querySelector('#board-size');
  boardSide = input.value;

  if (boardSide >= 1 && boardSide <= 5) {
    boardSide = 5;
  } else if (boardSide > 50) {
    boardSide = 50;
  }
};

const generateBoardPixels = (n) => {
  for (let i = 0; i < n; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';

    board.lastElementChild.appendChild(div);
  }
};

const generateBoardColumns = (n) => {
  for (let i = 0; i < n; i += 1) {
    const div = document.createElement('div');

    board.appendChild(div);

    generateBoardPixels(n);
  }
};

generateBoardColumns(5);

const removeBoard = () => {
  const oldBoard = board.children;

  for (let i = 0; oldBoard[i]; i) {
    board.removeChild(oldBoard[i]);
  }
};

const generateButton = document.querySelector('#generate-board');

const generateNewBoard = () => {
  removeBoard();

  if (boardSide > 0) {
    generateBoardLines(boardSide);
  } else {
    generateBoardLines(5);
  }
};

const checkInputValue = () => {
  inputValue();

  if (!boardSide) {
    alert('Board inválido!');
  }

  generateNewBoard();
};

generateButton.addEventListener('click', checkInputValue);

const colorList = document.querySelectorAll('.color');

const black = document.querySelector('.black');
black.classList.add('selected');
black.style.backgroundColor = 'black';

const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');

const handleRandomColors = () => {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
};

second.style.backgroundColor = handleRandomColors();
third.style.backgroundColor = handleRandomColors();
fourth.style.backgroundColor = handleRandomColors();

const removeSelectedClass = () => {
  for (let i = 0; i < colorList.length; i += 1) {
    colorList[i].classList.remove('selected');
  }
};

const palette = document.querySelector('#color-palette');

const selectColor = (event) => {
  if (event.target.classList.contains('color')) {
    if (event.target.className !== 'selected') {
      removeSelectedClass();

      event.target.classList.add('selected');
    }
  }
};

palette.addEventListener('click', selectColor);

const selectedColor = () => {
  for (let i = 0; i < colorList.length; i += 1) {
    if (colorList[i].classList.contains('selected')) {
      return colorList[i].style.backgroundColor;
    }
  }

  return '';
};

const boardColors = (event) => {
  const color = selectedColor();

  event.target.style.backgroundColor = color;
};

board.addEventListener('click', boardColors);

const button = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');

const clearBoard = () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].removeAttribute('style');
  }
};

button.addEventListener('click', clearBoard);
