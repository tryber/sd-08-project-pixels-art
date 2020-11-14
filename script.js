window.onload = function() {
  document.querySelectorAll('.color')[0].classList.add("selected");
};

function palette() {
  const colorsArray = ["#000", "#FF9933", "#FF6600", "#FF3300",];
  const colors = document.getElementById('color-palette');
  colors.forEach = function(cor) {
    const paletteColorDiv = document.getElementById("color-palette");
    paletteColorDiv.addEventListener("click", createEventsColor);
    for(let index = 0; index < colorsArray.length; index++) {
      const colorDiv = document.createElement("div");
      colorDiv.style.backgroundColor = colorsArray[index];
      paletteColorDiv.appendChild(colorDiv);
      colorDiv.className = "color";
    };


    let button = '';
      button.document.createElement('button');
      button.value = cor;
      button.type = 'button';
      button.className = 'color';
      button.style.width = '40px';
      button.style.height = '40px';
      button.style.backgroundColor = cor;
      button.style.border = "1px solid #000";
      button.addEventListener('click', handler(button));
      colors.appendChild(button);
  });
};

button[0].classList.add('selected');

const colorPalette = document.querySelector('.color-palette');

const pixelBoard = document.querySelector('.pixel-board');

let boardSize = 5;

function createBoard(n) {

}

