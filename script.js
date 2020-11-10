const colors = ['#000', '#2EC2A8', '#2D88CD', '#342FD4'];
let current = '#000';
let dim = 5;

const buttons = document.getElementsByClassName('color');
const area = document.getElementById('pixel-board');

function ChangeToColor(c) {
  const buttonWith = document.getElementsByClassName('selected');
  buttonWith[0].classList.remove('selected');
  buttons[c].classList.add('selected');
  current = colors[c];
}

function Paint(e) {
  e.target.style.backgroundColor = current;
}

function Randomize() {
  const hexColor = Math.floor(Math.random() * 16777215);
  const newColor = `#${hexColor.toString(16)}`;
  if (newColor.length < 7) {
    Randomize();
  }
  return newColor;
}

function MakeBoard() {
  const size = Math.min(Math.max(5, dim), 50);
  dim = size;

  while (area.firstChild) {
    area.removeChild(area.lastChild);
  }

  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.className = 'pixel-line';
    area.appendChild(line);

    for (let j = 0; j < size; j += 1) {
      const pxl = document.createElement('div');
      pxl.className = 'pixel';
      pxl.addEventListener('click', Paint);
      line.appendChild(pxl);
    }
  }
}

window.onload = function () {
  for (let i = 1; i < colors.length; i += 1) {
    colors[i] = Randomize();
  }
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].style.backgroundColor = colors[i];
  }
  MakeBoard();
  ChangeToColor(0);
};

function Verify() {
  if (!document.getElementById('board-size').value) {
    alert('Board inválido!');
    return;
  }
  dim = document.getElementById('board-size').value;
  MakeBoard();
}

document.getElementById('generate-board').addEventListener('click', Verify);
document.getElementById('clear-board').addEventListener('click', MakeBoard);
