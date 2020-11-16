function fillPalete() {
  const colorList = ['black', 'red', 'green', 'blue'];
  const palete = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const paleteItem = document.createElement('li');
    paleteItem.className = 'color';
    paleteItem.style.backgroundColor = colorList[index];
    palete.appendChild(paleteItem);
  }
}

function fillBoard() {
  const board = document.querySelector("#pixel-board");
  for (let rowIndex = 0; rowIndex < 5; rowIndex += 1) {
    let row = document.createElement('tr');
    for (let colIndex = 0; colIndex < 5; colIndex += 1) {
      let col = document.createElement('td');
      col.className = 'pixel';
      row.appendChild(col);
    }
    board.appendChild(row);
  }
}

fillPalete();
fillBoard();
