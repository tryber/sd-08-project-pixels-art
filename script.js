const colorList = ['red', 'green', 'blue', 'yellow', 'grey', 'orange', 'crimson', 'cyan', 'darkcyan', 'lime'];
const btnPixel = document.getElementById('pixel-board');
const pixelList = document.getElementsByClassName('pixel');
const btnClear = document.getElementById('clear-board');
const getInput = document.getElementById('board-size');
const btnInput = document.getElementById('generate-board');

function btnGenerate() {
  let listIndex = [];
  while (listIndex.length < 3) {
    const num = Math.ceil(Math.random() * 10) - 1;
    if (listIndex.includes(num) === false) {
      listIndex.push(num);
    }
  }
  console.log(listIndex)
  for (let indexColor = 0; indexColor < listIndex.length; indexColor += 1) {
    const tdColor = document.createElement('td');
    tdColor.id = colorList[listIndex[indexColor]];
    tdColor.className = 'color';
    tdColor.style.backgroundColor = colorList[listIndex[indexColor]];
    document.getElementById('color-palette').firstElementChild.firstElementChild.appendChild(tdColor);
  }
}

btnGenerate();

const btnBlack = document.getElementById('black');
const btnColor1 = document.getElementsByClassName('color')[1];
const btnColor2 = document.getElementsByClassName('color')[2];
const btnColor3 = document.getElementsByClassName('color')[3];

btnBlack.style.backgroundColor = 'black';

function saveColor(key, value) {
  sessionStorage.setItem(key, value);
}

function classChange(evt) {
  if (evt.target.className === 'color') {
    document.querySelector('.selected').className = 'color';
    evt.target.className = 'color selected';
    saveColor('selectedColor', evt.target.style.backgroundColor);
  }
}

btnBlack.addEventListener('click', classChange);
btnColor1.addEventListener('click', classChange);
btnColor2.addEventListener('click', classChange);
btnColor3.addEventListener('click', classChange);

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

window.onload = function () {
  boardSize(5);
  sessionStorage.setItem('selectedColor', 'black');
};