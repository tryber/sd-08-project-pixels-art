
// Variaveis
const qtdPallet = 4;
const primeiroPallet = 'black';
const divPallet = document.querySelector('#color-palette');
const divPixel = document.querySelector('#pixel-board');

function getRandomColor() {
  // Função para gerar cor Aleatória
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  if (color === '#FFFFFF') {
    getRandomColor();
  }
  return color;
}

function mudaCor(evt) {
  const removeSelected = document.querySelector('.selected');
  removeSelected.className = 'color';
  evt.target.className = 'color selected';

}

function criaPalette() {
  // Cria as Divs filha de color-Pallet
  for (let i = 1; i <= qtdPallet; i += 1) {
    const divChildPallet = document.createElement('div');
    divChildPallet.className = 'color';
    if (i === 1) {
      divChildPallet.style.backgroundColor = primeiroPallet;
      divChildPallet.className = 'color selected';

    } else {
      divChildPallet.style.backgroundColor = getRandomColor();
    }
    divChildPallet.addEventListener('click', mudaCor);
    divPallet.appendChild(divChildPallet);
  }
}
criaPalette();

function preenchePixel(evt) {
  const corBG = document.querySelector('.selected').style.backgroundColor;
  evt.target.style.backgroundColor = corBG;
}
function limpar() {
  const todosPixels = document.querySelectorAll('.pixel');
  for (let rmPixel = 0; rmPixel < todosPixels.length; rmPixel += 1) {
    todosPixels[rmPixel].style.backgroundColor = '#FFFFFF';
  }
}
const btnClear = document.createElement('button');
btnClear.id = 'clear-board';
btnClear.innerHTML = 'Limpar';
btnClear.addEventListener('click', limpar);
document.querySelector('#clear').appendChild(btnClear);
function criaPixel() {
  for (let i = 0; i < 5; i += 1) {
    const divChildLinePixel = document.createElement('div');
    for (let coluna = 0; coluna < 5; coluna += 1) {
      const divChildColPixel = document.createElement('div');
      divChildColPixel.className = 'pixel';
      divChildLinePixel.appendChild(divChildColPixel);
      divChildColPixel.addEventListener('click', preenchePixel);
    }
    divPixel.appendChild(divChildLinePixel);
  }
}

criaPixel();
