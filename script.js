function createPalletColors() {
  let divColorPallet = document.getElementById("color-palette");
  for (let i = 0; i < 4; i += 1) {
      let divChild = document.createElement("button");
      divChild.className = "color";      
      let colors = ['black', 'blue', 'orange', 'green'];
      divChild.style.backgroundColor = colors[i];
      divColorPallet.appendChild(divChild);
  }
}
createPalletColors();
function createSquares() {
  let squares = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) { // quantidade de linhas
      let row = document.createElement('div');
      for (let j = 0; j < 5; j += 1) { // quantidade de pixel
          let pixel = document.createElement('div');
          pixel.className = 'pixel';
          row.appendChild(pixel);
      }
      squares.appendChild(row);
  }
}
createSquares();

function limpar() {
    console.log("botão limpar clicado");
    document.getElementById('pixel-board').style.backgroundColor = "white";
}

limpar()