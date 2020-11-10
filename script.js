window.onload = function() {
  const black = document.querySelector('#black');
  black.className = 'selected';
}

function addTable() {
  const table = document.querySelector('#pixel-board');

  for (let index = 0; index < 5; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const tableDiv = document.createElement('tr');
      tableDiv.className = 'pixel';
      table.appendChild(tableDiv);
    }
  }
}

addTable();

function colorSelect() {
  const colorPalette = document.querySelector('#color-palette');
  const nameBlack = document.querySelector('#black');
  const nameRed = document.querySelector('#red');
  const nameGreen = document.querySelector('#green');
  const nameBlue = document.querySelector('#blue');
  let colorBack = document.querySelector('.color-sected');
  let className = 'color';


  colorPalette.addEventListener('click', function(event) {
    nameBlack.className = className;
    nameRed.className = className;
    nameGreen.className = className;
    nameBlue.className = className;

    event.target.className = 'selected';
    let cor = event.target.id;

    console.log(cor);
    });
}

colorSelect();

function colorPaint() {
  const table = document.querySelector('#pixel-board');

  table.addEventListener('click', function(event) {
  const color = document.querySelector('.color-selected').style.backgroundColor;

  event.target.style.backgroundColor = color;

  console.log(color);
  });
}

colorPaint();