const colorList = ['red', 'orange', 'yellow', 'green', 'grey', 'blue'];
const btnBlack = document.getElementById('black');
const btnColor1 = document.getElementsByClassName('color')[1];
const btnColor2 = document.getElementsByClassName('color')[2];
const btnColor3 = document.getElementsByClassName('color')[3];
const btnPixel = document.getElementById('pixel-board');
const pixelList = document.getElementsByClassName('pixel');
const btnClear = document.getElementById('clear-board');
const getInput = document.getElementById('board-size');
const btnInput = document.getElementById('generate-board');


function saveColor(key, value) {
  sessionStorage.setItem(key, value);
}

function btnColoredGen(color) {
  const btnColored = document.createElement('td');
  btnColored.id = color;
  btnColored.className = 'color';
  btnColored.style.backgroundColor = color;
  document.getElementById('color-palette').firstElementChild.firstElementChild.appendChild(btnColored);
}

function btnColoredActivation() {
  for (const color of colorList) {
    btnColoredGen(colorList[color]);
  }
}

function gerarLista() {
  btnColoredActivation();
}

function btnColorDelete() {
  const indexColor = Math.ceil(Math.random() * 6);
  while (document.getElementsByClassName('color').length > 4) {
    if (document.getElementsByClassName('color')[indexColor] !== undefined) {
      document.getElementsByClassName('color')[indexColor].outerHTML = '';
    }
  }
}

btnBlack.style.backgroundColor = 'black';

function classChange(evt) {
  if (evt.target.className === 'color') {
    document.querySelector('.selected').className = 'color';
    evt.target.className = 'color selected';
    saveColor('selectedColor', evt.target.style.backgroundColor);
  }
}

btnBlack.addEventListener('click', classChange);

function changeColor(evt) {
  const color = sessionStorage.getItem('selectedColor');
  evt.target.style.backgroundColor = color;
}

btnPixel.addEventListener('click', changeColor);

function reset() {
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

btnClear.addEventListener('click', reset);

function boardSize(sizeInput) {
  for (let repeatTr = 1; repeatTr <= sizeInput; repeatTr += 1) {
    const createTr = document.createElement('tr');
    for (let repeatTd = 1; repeatTd <= sizeInput; repeatTd += 1) {
      const createTd = document.createElement('td');
      createTd.className = 'pixel';
      createTr.appendChild(createTd);
    }
    document.getElementById('pixel-board').appendChild(createTr);
  }
}

function inputValidation() {
  if (getInput.value.length > 0) {
    if (getInput.value < 5) {
      getInput.value = 5;
    }
    if (getInput.value > 50) {
      getInput.value = 50;
    }
    for (let index = btnPixel.rows.length; index > 0; index -= 1) {
      btnPixel.lastChild.outerHTML = '';
    }
    boardSize(getInput.value);
    getInput.value = '';
  } else {
    alert('Board inválido!');
  }
}

btnInput.addEventListener('click', inputValidation);

window.onload = function() {
  boardSize(5);
  sessionStorage.setItem('selectedColor', 'black');
  gerarLista();
  btnColorDelete();
  btnColor1.addEventListener('click', classChange);
  btnColor2.addEventListener('click', classChange);
  btnColor3.addEventListener('click', classChange);
};
