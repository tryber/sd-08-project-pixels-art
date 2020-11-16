function changeSelected(event) {
  const lastSelected = document.querySelector('.selected');
  lastSelected.className = 'color';
  const newSelected = event.target;
  newSelected.className = 'color selected';
}

function firstSelect(element) {
  if (element.style.backgroundColor === 'black') {
    element.className = 'color selected';
  }
}

function paint(event) {
  const selectedColor = document.querySelector('.selected');
  const color = selectedColor.style.backgroundColor;
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = color;
}

// function generateRandomColor(index) {
//   if (index === 0) {
//     return 'black';
//   }
//   else {
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     return `#${randomColor}`;
//   }
// }

function fillPalete() {
  const colorList = ['black', 'red', 'green', 'blue'];
  const palete = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const paleteItem = document.createElement('li');
    paleteItem.className = 'color';
    paleteItem.addEventListener('click', changeSelected);
    paleteItem.style.backgroundColor = colorList[index];
    firstSelect(paleteItem);
    palete.appendChild(paleteItem);
  }
}

function fillBoard() {
  const board = document.querySelector('#pixel-board');
  for (let rowIndex = 0; rowIndex < 5; rowIndex += 1) {
    const row = document.createElement('tr');
    for (let colIndex = 0; colIndex < 5; colIndex += 1) {
      const col = document.createElement('td');
      col.className = 'pixel';
      col.addEventListener('click', paint);
      row.appendChild(col);
    }
    board.appendChild(row);
  }
}

function clearBoard() {
  const board = document.querySelectorAll('.pixel');
  for (let pixel = 0; pixel < board.length; pixel += 1) {
    board[pixel].style.backgroundColor = 'white';
  }
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard);

fillPalete();
fillBoard();
