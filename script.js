const btnBlack = document.getElementById('black');
const btnRed = document.getElementById('red');
const btnOrange = document.getElementById('orange');
const btnYellow = document.getElementById('yellow');

function classChange(evt) {
  if (evt.target.className === 'color') {
    evt.target.className = 'selected'
  }
}

btnBlack.addEventListener('click', classChange);