function createDiv() {
  let pallete = document.getElementById('color-palette');
  for (let i = 1; i < 5; i+=1) {
    let colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    pallete.appendChild(colorDiv);
  }
}
createDiv();

function fillColor() {
  let rgb = ['black', 'red', 'green', 'blue'];
  for (let j = 0; j < rgb.length; j++) {
    let someColor = document.getElementsByClassName('color')[j];
    someColor.style.backgroundColor = rgb[j];
  }
}
fillColor();

function createBoard() {
  let generateRow = document.getElementById('pixel-board');
  for (let i = 1; i < 5; i++) {
    let creatCell = document.createElement('div');
    creatCell.className = 'pixel';
    generateRow.appendChild(creatCell);
  }
}
createBoard();

function createBoard() {
  let generateBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i++) {
    let createColun = document.createElement('div');
    generateBoard.appendChild(createColun);
    for (let j = 0; j < 5; j++) {
      let createRow = document.createElement('div');
      createRow.className = 'pixel';
      generateBoard.appendChild(createRow);
    }
  }
}
createBoard();





  