let colors = ['#000', '#2EC2A8', '#2D88CD', '#342FD4'];
let current = '#000';

const buttons = document.getElementsByClassName('color');
const dim = document.getElementById('board-size');
const area = document.getElementById('pixel-board');

function ChangeToColor(c) {
  let buttonWith = document.getElementsByClassName('selected');
  buttonWith[0].classList.remove('selected');
  buttons[c].classList.add('selected');
  current = colors[c];
}

function Paint(e) {
  e.target.style.backgroundColor = current;
}

function Randomize() {
  const hexColor = (Math.random() * 0xFFFFFF << 0);
  const newColor = `#${hexColor.toString(16)}`;
  if (newColor.length < 7) {
    Randomize();
  }
  return newColor;
}

function MakeBoard() {
  const size = dim.value;

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
