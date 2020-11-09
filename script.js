
const pixelBoard = document.getElementById('pixel-board');

function generateBoard(num) {
    for (let index = 1; index <= num; index += 1) {
    let divLine = document.createElement('div');
    pixelBoard.appendChild(divLine);

    for (let index = 1; index <= num; index += 1) {
      let pixelUnit = document.createElement('div');
      pixelUnit.className = 'pixel';
      divLine.appendChild(pixelUnit); 
    }
  }
};
generateBoard(5);

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
  pixelUnit.addEventListener('click', changeColor);

  function changeColor(event) {
    let selectedColor = document.querySelector('.selected');
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  };

  
}
fillPixelColor();

function clearBoard() {
  let clearPixels = document.getElementById("clear-board");
  let pixelUnits = document.querySelectorAll(".pixel");

  function clearPixelsColor() {
    for (let i = 0; i < pixelUnits.length; i += 1) {
      pixelUnits[i].style.backgroundColor = 'white';
    }
  }
  clearPixels.addEventListener('click', clearPixelsColor);
}
clearBoard();

function generateNewBoard() {
  let VQV = document.getElementById("generate-board");

  VQV.addEventListener('click', function(){
    let input = document.getElementById("board-size").value;
    if (input < 5) {
      input = 5;
    }
    else if (input > 50) {
      input = 50;
    }

    if (input == "") {
      alert("Board inválido!");
    }
    else {
      const myNode = document.getElementById("pixel-board");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
      }
      generateBoard(input);
    }
  });
}
generateNewBoard();