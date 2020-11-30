// Grid Creation
function gridCreation(size) {
  const table = document.querySelector('.table');
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.className = 'tr';
    for (let j = 0; j < size; j += 1) {
      const column = document.createElement('div');
      column.className = 'pixel td';
      line.appendChild(column);
    }
    table.appendChild(line);
  }
}

// Random the 4 colors
function getRandomColors() {
  return (Math.floor(Math.random()*256) + ', ' + Math.floor(Math.random()*256) + ', ' + Math.floor(Math.random()*256));
}

function defineColorsBackground() {
  const buttons = document.querySelectorAll('.color');
  buttons[0].style.backgroundColor = 'black';
  buttons[0].classList.add('selected');
  let helper = ['0, 0, 0'];
  for (let i = 1; i < buttons.length; i += 1) {
    helper[i] = getRandomColors();
    for (let j = 0; j < helper.length; j += 1) {
      if (helper[j] === helper[i]) {
        helper[i] = getRandomColors();
      }
    }
    buttons[i].style.backgroundColor = 'rgb(' + helper[i] + ')';
  }
}

// Selected Color Change
function removeSelected () {
  const buttons = document.querySelectorAll('.color');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].classList.remove('selected');
  }
};

const paletaCor = document.querySelector('#color-palette');

function mudarCorEscolhida (event) {
  if (event.target.classList.contains('color')) {
    if (event.target.className !== 'selected') {
      removeSelected();

      event.target.classList.add('selected');
    }
  }
};

paletaCor.addEventListener('click', mudarCorEscolhida);

// Clear Button
const clearButton = document.querySelector('#clear-board');

function cleanScreen() {
  let linha = document.querySelectorAll('.tr');
  let coluna = document.querySelectorAll('.td');
  for (let i = 0; i < linha.length; i++) {
    linha[i].style.backgroundColor = 'white';
    for (let j = 0; j < coluna.length; j++) {
      coluna[j].style.backgroundColor = 'white';
    }
  }
}

clearButton.addEventListener('click', cleanScreen);

window.onload = function () {
  defineColorsBackground();
  gridCreation(5);
};
