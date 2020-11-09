function paletaCores() {
  let coresFundo = ['black', 'red', 'blue', 'green'];
  let palette = document.getElementById('color-palette');

  for (let i = 0; i < coresFundo.length; i += 1) {
    let quadradosCores = document.createElement('li');
    quadradosCores.className = 'color';
    quadradosCores.style.backgroundColor = coresFundo[i];
    palette.appendChild(quadradosCores);
  }
}
paletaCores();

function quadroPixels() {
  // let tamanhoDefinicao = prompt('quantos quadrados você quer?');
  // let tamanhoDefinido = Number(tamanhoDefinicao);
  let linhaQuadrados = 4;
  let colunaQuadrados = 5;
  let squareContainer = document.getElementById('pixel-board');

  for (let i = 0; i < linhaQuadrados; i += 1) {
    let linhaSquares = document.createElement('tr');
    squareContainer.appendChild(linhaSquares);

    for (let i = 0; i < colunaQuadrados; i += 1) {
      let colunaSquares = document.createElement('td');
      squareContainer.appendChild(colunaSquares);
    }
  }
}
quadroPixels();
