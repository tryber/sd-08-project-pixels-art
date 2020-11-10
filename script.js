function createPixelBoard() {
  
  for (let count = 1; count <= 25; count += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    document.getElementById('pixel-board').appendChild(divPixel);
  }
}
createPixelBoard()

function createBtn(nome, id) {
  const btn = document.createElement('button');
  btn.innerHTML = nome;
  btn.id = id;
  
  document.getElementById('button-container').appendChild(btn);
}

createBtn('limpar', 'clear-board');

createBtn('VQV', 'generate-board');
