let colors = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');
let clearButton = document.getElementById('clear-board');
let selected = colors[0];
let currentColor = 'black';

selected.classList.add('selected');

function selectColor(event) {
  selected.classList.remove('selected');
  selected = event.target;
  selected.classList.add('selected');
  currentColor = selected.classList[1];
}

function fillPixel(event) {
  event.target.style.backgroundColor = currentColor;
}

function clearBoard() {
  for (pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

for (color of colors) {
  color.addEventListener('click', selectColor);
}

for (pixel of pixels) {
  pixel.addEventListener('click', fillPixel);
}

clearButton.addEventListener('click', clearBoard);
