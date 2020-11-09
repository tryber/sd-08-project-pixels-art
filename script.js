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



