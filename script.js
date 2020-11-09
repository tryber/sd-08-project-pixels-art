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

