function createDiv() {
  let pallete = document.getElementById('color-palette');
  for (let i = 1; i < 5; i+=1) {
    let colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    pallete.appendChild(colorDiv);
  }
}
createDiv();

let rgb = ['black', 'red', 'green', 'blue'];

function fillColor() {
  for (let j = 0; j < rgb.length; j++) {
    let eachColor = document.getElementsByClassName('color')[j];
    eachColor.style.backgroundColor = rgb[j];
  }
  document.querySelector('.color').classList.add("selected"); 
}
fillColor();

let listColors = document.querySelectorAll('.color');

function changeColor(event) {
 for (let index=0; index<listColors.length; index++) {
  listColors[index].classList.remove('selected');
 } 
 event.target.classList.add('selected');
}

function choseColor() {
  for (let selector of listColors) {
    selector.addEventListener('click', changeColor);
  }
}
choseColor();



function createBoard() {
  let generateBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i++) {
    let createColun = document.createElement('div');
    generateBoard.appendChild(createColun);
    for (let j = 0; j < 5; j++) {
      let createRow = document.createElement('div');
      createRow.className = 'pixel';
      createColun.appendChild(createRow);
      createRow.addEventListener('click', (e)=> {
        // let bgColor = window.getComputedStyle(document.getElementsByClassName('selected')[0]).backgroundColor;
        let bgColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
        e.target.style.backgroundColor = bgColor;
      })
    }
  }
}
createBoard();





  