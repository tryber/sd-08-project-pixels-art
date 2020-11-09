function createBoard(num) {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 1; index <= num; index += 1) {
    let divLine = document.createElement('div');
    divLine.className = 'lines';
    pixelBoard.appendChild(divLine);

    for (let index = 1; index <= num; index += 1) {
      let pixelUnit = document.createElement('div');
      pixelUnit.className = 'pixel';
      divLine.appendChild(pixelUnit); 
    }
  }
}
createBoard(5);

function createPalette() {
  let firstColor = document.getElementById('firstColor');
  let secondColor = document.getElementById('secondColor');
  let thirdColor = document.getElementById('thirdColor');
  let fourthColor = document.getElementById('fourthColor');
  firstColor.style.backgroundColor = 'black';
  secondColor.style.backgroundColor = 'green';
  thirdColor.style.backgroundColor = 'orange';
  fourthColor.style.backgroundColor = 'red';
}
createPalette();

function selectedColor() {
  let colorPalette = document.querySelector('#color-palette');

  function changeStatus(event) {
    let selectedPalette = document.querySelector(".color.selected");
    selectedPalette.className = 'color';
    event.target.className = 'color selected';
  }

  colorPalette.addEventListener('click' , changeStatus);
  
}
selectedColor();

function fillPixelColor() {
  let pixelUnit = document.querySelector('#pixel-board');
  

  function changeColor(event) {
    let selectedColor = document.querySelector('.selected');
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  };

  pixelUnit.addEventListener('click', changeColor);
}
fillPixelColor();

