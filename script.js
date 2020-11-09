// Sets reference to color palette div
const palette = document.querySelector('.palette')

// Sets reference select color picker divs
const blackColor = document.querySelector('.black');
const firstColor = document.querySelector('.first');
const secondColor = document.querySelector('.second');
const thirdColor = document.querySelector('.third');

// Sets a nodeList wth all color picker divs
const colorList = document.querySelectorAll('.color');

// Sets and select blackColor
blackColor.style.backgroundColor = 'black';
blackColor.classList.add('selected');

// Sets other colors
firstColor.style.backgroundColor = 'blue';
secondColor.style.backgroundColor = 'red';
thirdColor.style.backgroundColor = 'gray';


function removeSelection() {
  for (let i = 0; i < colorList.length; i += 1) {
    colorList[i].classList.remove('selected');
  }
}

function parseSelection() {
  for (let i = 0; i < colorList.length; i += 1) {
    if (colorList[i].classList.contains('selected')) {
      return colorList[i].style.backgroundColor;
    }
  }
  return '';
}

function selectColor(event) {
  const eventTarget = event.target;
  if (eventTarget.className != 'palette') {
    removeSelection();
    eventTarget.classList.add('selected')
    console.log(`${eventTarget} selected!`);
  }
}

palette.addEventListener('click', selectColor)

let selectedColor = parseSelection();
