window.onload = function () {
  document.querySelector('.color').className = 'color selected';
}

function initialColors () {
  let colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'blue';
  colors[2].style.backgroundColor = 'yellow';
  colors[3].style.backgroundColor = 'green';
}
initialColors();

function pixelBoard () {
  let divBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < 26; index += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divBoard.appendChild(divPixel);
  }
}
pixelBoard();

function selectColor () {
  let element1 = document.querySelectorAll('.color')[0];
  let element2 = document.querySelectorAll('.color')[1];
  let element3 = document.querySelectorAll('.color')[2];
  let element4 = document.querySelectorAll('.color')[3];
  let palette = document.querySelector('#color-palette');
  
  palette.addEventListener('click', function(event) {
    if (event.target.style.backgroundColor === 'black' && event.target.className === 'color') {
      event.target.className = 'color selected';
      element2.className = 'color';
      element3.className = 'color';
      element4.className = 'color';
    } else if (event.target.style.backgroundColor === 'blue' && event.target.className === 'color') {
      event.target.className = 'color selected';
      element1.className = 'color';
      element3.className = 'color';
      element4.className = 'color';
    } else if (event.target.style.backgroundColor === 'yellow' && event.target.className === 'color') {
      event.target.className = 'color selected';
      element1.className = 'color';
      element2.className = 'color';
      element4.className = 'color';
    } else if (event.target.style.backgroundColor === 'green' && event.target.className === 'color') {
      event.target.className = 'color selected';
      element1.className = 'color';
      element2.className = 'color';
      element3.className = 'color';
    }
  });

  // let colorselection = document.querySelectorAll('.color').forEach (function (item) {
  //   item.addEventListener('click', function (event) {
  //     event.target.className = 'color selected';
  //     console.log(item.className);
  // });
  // });
}
selectColor();