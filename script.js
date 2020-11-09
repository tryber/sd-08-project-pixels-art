let coresFundo = ['black','red','blue','green', 'yellow']
let palette = document.getElementById('color-palette');

for (let i = 0; i < coresFundo.length; i += 1){
    let quadradosCores = document.createElement('li');
    quadradosCores.style.backgroundColor = coresFundo[i];
    palette.appendChild(quadradosCores)
}


let tamanhoDefinicao = prompt('quantos quadrados você quer?');
let tamanhoDefinido = Number(tamanhoDefinicao);
let squareContainer = document.getElementById('pixel-board');

for (let i = 0; i < tamanhoDefinido; i += 1) {
  let squares = document.createElement('li');
  squareContainer.appendChild(squares);
}
