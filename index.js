function startLoad() {              /* Implement window.onload */

  clearBoard();

  let pixels = document.getElementsByClassName('pixel');
  let blackElement = document.querySelector('.black');

  let pixelBoardContainer = document.querySelector('tbody');

  for (let index2 = 0; index2 < 5; index2 += 1) {
    let row = document.createElement('tr');

    pixelBoardContainer.appendChild(row);

    for (let index3 = 0; index3 < 5; index3 += 1) {
      let pixel = document.createElement('td');

      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      row.appendChild(pixel);

      setPixelColor();
    }
  }

  for (let index = 0; index < pixels.length; index +=1) {
    pixels[index].style.backgroundColor = 'white';
  };

  blackElement.classList.add('selected');
}
startLoad();


/**/

function selectColor() {
  let colorPalette = document.getElementById('color-palette');

  colorPalette.addEventListener('click', function (event) {
    removesSelected();
    let color = event.target;

    color.classList.add('selected');
    colorPalette.classList.remove('selected');
  });
}
selectColor();

function removesSelected() {
  let color = document.querySelectorAll('.selected');

  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
}


function setPixelColor() {
  let pixelsList = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelsList.length; index += 1) {
    let pixelItem = pixelsList[index];
    pixelItem.addEventListener('click', function (event) {
      event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      console.log('s');
    })
  }
}



function createsButton(nome) {
  let button = document.createElement('button');

  button.innerHTML = nome;
  return button;
}


function clearButton() {

  let palette = document.getElementById('button-container');
  let myButton = createsButton('Limpar');

  palette.appendChild(myButton);
  myButton.id = 'clear-board';
  myButton.addEventListener('click', startLoad);

}
clearButton();

function setPixelBoardSizeButtonAndInput() {

  let buttonContainer = document.getElementById('button-container');
  let sizeButton = createsButton('VQV');
  let input = document.createElement('input');

  input.id = 'board-size';
  input.type = 'number';
  input.setAttribute('min', '0');
  input.setAttribute('max', '');
  sizeButton.id = 'generate-board';
  buttonContainer.appendChild(input);
  buttonContainer.appendChild(sizeButton);

}
setPixelBoardSizeButtonAndInput();


function clearBoard() {

  let pixelList = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelList.length; index += 1) {

    pixel = pixelList[index];
    pixel.parentNode.removeChild(pixel);

  }

};



function createsPixelBoard() {

  let pixelBoardContainer = document.querySelector('tbody');
  let input = document.getElementById('board-size');
  let createsBoardButton = document.querySelector('#generate-board');

  createsBoardButton.addEventListener('click', function () {

    let boardSize = input.value;

    if (boardSize == '') {

      alert('Board inválido!');

    } else {

      if (boardSize < 5) {
        clearBoard();
        for (let index = 0; index < 5; index += 1) {
          let row = document.createElement('tr');
          pixelBoardContainer.appendChild(row);
          for (let index2 = 0; index2 < 5; index2 += 1) {
            let pixel = document.createElement('td');

            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            row.appendChild(pixel);

            setPixelColor();
          }
        }
      } else if (boardSize > 50) {
        clearBoard();
        for (let index = 0; index < 50; index += 1) {
          let row = document.createElement('tr');
          pixelBoardContainer.appendChild(row);
          for (let index2 = 0; index2 < 50; index2 += 1) {
            let pixel = document.createElement('td');

            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            row.appendChild(pixel);

            setPixelColor();
          }
        }
      } else {
        clearBoard()

        for (let index = 0; index < boardSize; index += 1) {
          let row = document.createElement('tr');
          pixelBoardContainer.appendChild(row);
          for (let index2 = 0; index2 < boardSize; index2 += 1) {
            let pixel = document.createElement('td');

            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            row.appendChild(pixel);

            setPixelColor();
          }
        }
      }
    }
  })
}
createsPixelBoard();

/* Selecione as cores das paletas de cores */
function setColorOne(color) {
  let colorOne = document.querySelectorAll('.color')[0];
  colorOne.style.backgroundColor = color;
}
setColorOne('black');

function setColorTwo(color) {
  let colorTwo = document.querySelectorAll('.color')[1];
  colorTwo.style.backgroundColor = color;
}
setColorTwo('rgb(15, 163, 107)');

function setColorThree(color) {
  let colorThree = document.querySelectorAll('.color')[2];
  colorThree.style.backgroundColor = color;
}
setColorThree(' rgb(255, 255, 0)');

function setColorFour(color) {
  let colorFour = document.querySelectorAll('.color')[3];
  colorFour.style.backgroundColor = color;
}
setColorFour('pink');

/**/



