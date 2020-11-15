const pixelBoard = document.getElementById('pixel-board');

function generateBoard(num) {
  for (let index = 1; index <= num; index += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'board-line';
    pixelBoard.appendChild(divLine);

    for (let j = 1; j <= num; j += 1) {
      const pixelUnit = document.createElement('div');
      pixelUnit.className = 'pixel';
      divLine.appendChild(pixelUnit);
    }
  }
}
generateBoard(5);

function createPalette() {
  const firstColor = document.getElementById('firstColor');
  const secondColor = document.getElementById('secondColor');
  const thirdColor = document.getElementById('thirdColor');
  const fourthColor = document.getElementById('fourthColor');

  const arrayColors = [];
  for (let i = 0; i < 3; i += 1) {
    const rgbRandom = 'rgb(';
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    arrayColors.push(rgbRandom.concat(r, ' ,', g, ' ,', b, ')'));
  }

  firstColor.style.backgroundColor = 'black';
  secondColor.style.backgroundColor = arrayColors[0];
  thirdColor.style.backgroundColor = arrayColors[1];
  fourthColor.style.backgroundColor = arrayColors[2];
}
createPalette();

const colorPalette = document.querySelector('#color-palette');


function changeStatus(event) {
  if (event.target.className === 'color') {
    const selectedPalette = document.querySelector('.selected');
    selectedPalette.className = 'color';
    event.target.className = 'color selected';
  }
}

colorPalette.addEventListener('click', changeStatus);

const pixelUnit = document.querySelector('#pixel-board');

function changeColor(event) {
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}
pixelUnit.addEventListener('click', changeColor);

const clearPixels = document.getElementById('clear-board');
const pixelUnits = document.querySelectorAll('.pixel');

function clearPixelsColor() {
  for (let i = 0; i < pixelUnits.length; i += 1) {
    pixelUnits[i].style.backgroundColor = 'white';
  }
}
clearPixels.addEventListener('click', clearPixelsColor);


function generateNewBoard() {
  const VQV = document.getElementById('generate-board');

  VQV.addEventListener('click', function () {
    let input = document.getElementById('board-size').value;
    if (input === '') {
      alert('Board inválido!');
    }

    if (input < 5) {
      input = 5;
    } else if (input > 50) {
      input = 50;
    }

    if (input >= 5 || input <= 50) {
      const myNode = document.getElementById('pixel-board');
      while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
      }
      generateBoard(input);
    }
  });
}
generateNewBoard();
