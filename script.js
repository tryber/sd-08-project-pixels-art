window.onload = sessionStorage.setItem('selectedColor', 'black');
const btnBlack = document.getElementById('black');
const btnRed = document.getElementById('red');
const btnOrange = document.getElementById('orange');
const btnYellow = document.getElementById('yellow');
const btnPixel = document.getElementById('pixel-board');
const pixelList = document.getElementsByClassName('pixel');
const btnClear = document.getElementById('clear-board');

function saveColor(key, value) {
  sessionStorage.setItem(key, value);
}

btnBlack.style.backgroundColor = 'black';
btnRed.style.backgroundColor = 'red';
btnOrange.style.backgroundColor = 'orange';
btnYellow.style.backgroundColor = 'yellow';

function classChange(evt) {
  if (evt.target.className === 'color') {
    document.querySelector('.selected').className = 'color';
    evt.target.className = 'color selected';
    saveColor('selectedColor', evt.target.style.backgroundColor);
  }
}

btnBlack.addEventListener('click', classChange);
btnRed.addEventListener('click', classChange);
btnOrange.addEventListener('click', classChange);
btnYellow.addEventListener('click', classChange);

function changeColor(evt) {
  const color = sessionStorage.getItem('selectedColor');
  evt.target.style.backgroundColor = color;
}

btnPixel.addEventListener('click', changeColor);

function reset(){
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

btnClear.addEventListener('click', reset);
