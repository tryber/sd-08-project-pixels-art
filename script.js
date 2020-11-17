window.onload = function () {
  const palleteColorsList = document.querySelectorAll('.color');
  palleteColorsList[0].className += ' selected';
  createBoardPixel(5);
};

function randomColor() {
  let colorArray = ['rgb(0 , 0 , 0)'];
  for (let index = 1; index < 4; index += 1) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    colorArray.push(`rgb(${red} , ${green} , ${blue})`);
  }
  return colorArray;
}

function createPalette() {
  const palleteColorsList = document.querySelector('#color-palette');
  const colorArray = randomColor();
  for (let i = 0; i < colorArray.length; i += 1) {
    const colorElement = document.createElement('li');
    colorElement.className = 'color';
    colorElement.style.backgroundColor = colorArray[i];
    palleteColorsList.appendChild(colorElement);
  }
}

createPalette();

function createBoardPixel(size) {
  const board = document.querySelector('#pixel-board');
  for (let index = 1; index <= size; index += 1) {
    const lineBoardElement = document.createElement('div');
    lineBoardElement.className = 'lines';
    for (let index = 0; index < size; index += 1) {
      const squarePixel = document.createElement('div');
      squarePixel.className = 'pixel';
      lineBoardElement.appendChild(squarePixel);
    }
    board.appendChild(lineBoardElement);
  }
}

function paletteColorSelected() {
  const paletteColors = document.querySelector('#color-palette');
  paletteColors.addEventListener('click', function (eventColor) {
    const colors = document.querySelectorAll('.color')
    for (let element of colors) {
      element.className = 'color';
    }
    eventColor.target.className = 'color selected';
  });
}

paletteColorSelected();

function paint() {
  const board = document.querySelector('#pixel-board');
  board.addEventListener('click', paintPixel);
  function paintPixel(eventPixel) {
    const pixelSelected = document.querySelector('.selected');
    if (eventPixel.target.style.backgroundColor == pixelSelected.style.backgroundColor)
      eventPixel.target.style.backgroundColor = 'white';
    else
    eventPixel.target.style.backgroundColor = pixelSelected.style.backgroundColor;
  }
}

paint();

function createButtonClear() {
  const buttonClearElement = document.createElement('button');
  buttonClearElement.id = 'clear-board';
  buttonClearElement.innerHTML = 'Limpar';
  buttonClearElement.className = 'button-clear';
  const buttonsTag = document.querySelector('#buttons');
  buttonsTag.appendChild(buttonClearElement);
}

createButtonClear();

function clearBoard() {
  const buttonClear = document.querySelector('#clear-board');
  buttonClear.addEventListener('click', function () {
    const boardPixel = document.querySelectorAll('.pixel');
    for (let pixel of boardPixel) {
      pixel.style.backgroundColor = 'white';
    }
  });
}

clearBoard();

function createButtonInput() {
  const buttonsTag = document.querySelector('#buttons');
  const labelElement = document.createElement('label');
  labelElement.htmlFor = 'board-size';
  labelElement.innerHTML = 'Tabuleiro (entre 5 a 50 pixels)';
  buttonsTag.appendChild(labelElement);
  const inputElement = document.createElement('input');
  inputElement.id = 'board-size';
  inputElement.type = 'number';
  inputElement.className = 'input-board'
  inputElement.min = '1';
  inputElement.max = '50';
  buttonsTag.appendChild(inputElement);
  const buttonElement = document.createElement('button');
  buttonElement.id = 'generate-board';
  buttonElement.innerHTML = 'VQV';
  buttonElement.className = 'button-board';
  buttonsTag.appendChild(buttonElement);
}

createButtonInput();

function validateInput() {
  const inputBoard = document.querySelector("#board-size");
  inputBoard.addEventListener("change", function (size) {
    if (!size.target.value){
      size.target.value = '';
    } else if (size.target.value > parseInt(size.target.getAttribute("max"))) { 
      size.target.value = size.target.getAttribute("max");
    } else if (size.target.value < '5') {
      size.target.value = '5';
    }
  });
}

validateInput();

function buttonCreateBoard() {
  const buttonBoard = document.querySelector('#generate-board');
  buttonBoard.addEventListener('click', function () {
    const inputBoard = document.querySelector('#board-size');
    const boardPixels = document.querySelectorAll('.lines');
    console.log(inputBoard.value);
    if (inputBoard.value == '') {
      alert('Board inválido!')
    } else {
      for (let tag of boardPixels) {
        const board = document.querySelector('#pixel-board');
        board.removeChild(tag);
      }
      createBoardPixel(inputBoard.value);
    }
  });
}

buttonCreateBoard();
