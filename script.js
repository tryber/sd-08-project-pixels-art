const color = document.querySelectorAll('.color');
const palette = document.querySelector('#color-palette');

function randomColor() {
  return `rgb(${Math.trunc(Math.random() * 255)} , ${Math.trunc(Math.random() * 255)} , ${Math.trunc(Math.random() * 255)})`;
}

for (let i = 1; i < color.length; i += 1) {
  color[i].style.backgroundColor = randomColor();
}

function changeSelector(event) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

palette.addEventListener('click', changeSelector);

const tab = document.querySelector('.table');

function changeColor(event) {
  const selected = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
  event.target.style.backgroundColor = selected;
}

tab.addEventListener('click', changeColor);

const button = document.querySelector('.button');

function clearColors() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clearColors);

const input = document.querySelector('.input');

function inputNumber() {
  const number = input.value;
  if (number === '') {
    alert('Board inválido!');
    return false;
  } else if (number < 5) {
    alert('5 é o mínimo');
    input.value = 5;
  } else if (number > 50) {
    alert('50 é o máximo');
    input.value = 50;
  }
  return true;
}

const vqv = document.querySelector('.vqv');

const table = document.querySelector('.table');

function refreshBoard() {
  const childs = table.children;
  for (let i = (childs.length - 1); i >= 0; i -= 1) {
    table.removeChild(childs[i]);
  }
}

function createBoard() {
  for (let i = 0; i < input.value; i += 1) {
    const td = document.createElement('div');
    table.appendChild(td);
    table.children[i].classList.add('line');
    for (let j = 0; j < input.value; j += 1) {
      const tr = document.createElement('div');
      table.children[i].appendChild(tr);
      table.children[i].children[j].classList.add('pixel');
    }
  }
}

function boardPixel() {
  refreshBoard();
  if (inputNumber() === true) {
    createBoard();
  }
}

vqv.addEventListener('click', boardPixel);
