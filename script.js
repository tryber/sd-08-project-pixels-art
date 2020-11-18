function createBoard(){
let board = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index ++) {
    let row = document.createElement('div');
    row.className = 'pixel row';
    board.appendChild(row);
    for (let index2 = 0; index2 < 5; index2 ++) {
      let column = document.createElement('div');
      column.className = 'pixel column';
      row.appendChild(column);
    }
  }
}
createBoard();


