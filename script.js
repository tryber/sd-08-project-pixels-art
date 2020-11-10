let colors = ['#000', '#2EC2A8', '#2D88CD', '#342FD4'];
let current = '#000';

const buttons = document.getElementsByClassName('color');
const dim = document.getElementById('board-size');
const area = document.getElementById('pixel-board');

function ChangeToColor(c) {
  current = colors[c];
}

window.onload = function () {
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].style.backgroundColor = colors[i];
  }
  MakeBoard();
};

function MakeBoard() {
  let size = dim.value;

  while(area.firstChild) {
    area.removeChild(area.lastChild);
  }

  for (let i = 0; i < size; i += 1) {
    let line = document.createElement('div');
    line.className = 'pixel-line';
    area.appendChild(line);

    for (let j = 0; j < size; j += 1) {
      let pxl = document.createElement('div');
      pxl.className = 'pixel';
      pxl.addEventListener('click', Paint);
      line.appendChild(pxl);
    }
  }
}

function Paint(e) {
  e.target.style.backgroundColor = current;
}