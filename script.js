const black = document.querySelector('.black');
const blue = document.querySelector('.blue');
const pink = document.querySelector('.pink');
const yellow = document.querySelector('.yellow');

function changeSelector() {
  black.classList.remove('selected');
  blue.classList.remove('selected');
  pink.classList.remove('selected');
  yellow.classList.remove('selected');
  this.classList.add('selected');
}

black.addEventListener('click', changeSelector);
blue.addEventListener('click', changeSelector);
pink.addEventListener('click', changeSelector);
yellow.addEventListener('click', changeSelector);

const pixel = document.querySelectorAll('.pixel');

function changeColor() {
  const selected = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
  this.style.backgroundColor = selected;
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', changeColor);
}

const button = document.querySelector('.button');

function clearColors() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clearColors);
