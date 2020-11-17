let colorPalette = document.getElementById('color-palette');
let colors = ['black', 'red', 'purple', 'green'];
let pixelBoard = document.getElementById('pixel-board');
let colorSelected = document.getElementsByClassName('color');
let buttonElement = document.querySelector('#clear-board');
let pixelSelected = document.getElementsByClassName('pixel');



for (let index = 0; index < 4; index += 1){
    let createBoxColors = document.createElement('li');
    createBoxColors.className = 'color';
    createBoxColors.style.backgroundColor = colors[index];
    colorPalette.appendChild(createBoxColors);
  }
  for (let index = 0; index < 5; index += 1) {
    let linePalette = document.createElement('div');
    linePalette.className = 'line';
    pixelBoard.appendChild(linePalette);

    for (let index = 0; index < 5; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      linePalette.appendChild(pixel);
    }
  }
  window.onload = function () {
    colorSelected[0].className += ' selected';
  };
  
  function changeSelected(select) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    select.className += ' selected';
  }
  
  colorPalette.addEventListener('click', function (e) {
    changeSelected(e.target);
  });
  
  
  pixelBoard.addEventListener('click', function (e) {
    e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  });
  
  buttonElement.addEventListener('click', function () {
    for (let index = 0; index < pixelSelected.length; index += 1) {
      pixelSelected[index].style.background = 'white';
    }
  });
  
  