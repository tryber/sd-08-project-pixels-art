window.onload = function () {
  const btnGenerate = document.getElementById('generate-board');

  function generateBoard(size) {
    const tableExists = document.querySelector('#pixel-board');
    if (tableExists !== null) {
      tableExists.remove();
    }
    if (size === undefined) {
      size = 5;
    }
    const mainElement = document.getElementById('main');
    const table = document.createElement('table');
    table.id = 'pixel-board';
    for (let i = 1; i <= size; i += 1) {
      const tr = document.createElement('tr');
      for (let j = 1; j <= size; j += 1) {
        const td = document.createElement('td');
        td.classList.add('pixel');
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    mainElement.appendChild(table);
  }
  generateBoard();

  function setupColorPalette() {
    const colors = [
      'blue',
      'red',
      'yellow',
      'pink',
      'orange',
      'purple',
      'gray',
    ];
    const pixel = document.getElementsByClassName('color');
    pixel[0].style.backgroundColor = 'black';
    const index = [];
    while (index.length <= 3) {
      const aux = Math.floor((Math.random()) * ((7 - 1) + 1));
      if (index.indexOf(aux) === -1) index.push(aux);
    }
    for (let i = 1; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = colors[index[i]];
    }
  }
  setupColorPalette();

  function selectColor(color) {
    const pixel = document.getElementsByClassName('color');
    for (let i = 0; i < pixel.length; i += 1) {
      if (pixel[i].style.backgroundColor === color) {
        pixel[i].classList.add('selected');
      }
    }
  }
  selectColor('black');

  function eventPalette() {
    const pixel = document.getElementsByClassName('color');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].addEventListener('click', function () {
        const colorSelected = document.querySelector('.selected');
        colorSelected.classList.remove('selected');
        pixel[i].classList.add('selected');
      });
    }
  }
  eventPalette();
  function changePixelColor() {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', function () {
        pixels[i].style.backgroundColor = document.querySelector(
          '.selected',
        ).style.backgroundColor;
      });
    }
  }
  changePixelColor();
  function clearPixels() {
    const pixels = document.querySelectorAll('.pixel');
    const btnClear = document.getElementById('clear-board');
    btnClear.addEventListener('click', function () {
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'white';
      }
    });
  }
  clearPixels();

  function btnVQV() {
    btnGenerate.addEventListener('click', function () {
      const inputNunber = document.getElementById('board-size');
      if (inputNunber.value === '') {
        alert('Board inválido!');
      } else if (parseInt(inputNunber.value, 10) < 5) {
        generateBoard(5);
      } else if (parseInt(inputNunber.value, 10) > 50) {
        generateBoard(50);
      } else {
        generateBoard(inputNunber.value);
        changePixelColor();
        clearPixels();
      }
    });
  }
  btnVQV();
};
