const cores = ['black', 'red', ' blue', 'green'];
const divColorPalette = document.getElementById("color-palette");

for (let i in cores) {
  let diviCores = document.createElement('div');
  diviCores.style = `background-color:${cores[i]};`;
  diviCores.className = 'color';
  if (i == 0) {
    diviCores.classList.add('selected');
  }
  divColorPalette.appendChild(diviCores);
}

const pixelBoard = document.getElementById('pixel-board');

for (let i = 1; i <= 25; i++) {
  const divSpan = document.createElement('div');
  divSpan.className = 'pixel';
  pixelBoard.appendChild(divSpan);
}

divColorPalette.addEventListener('click', pegarCor);
pixelBoard.addEventListener('click', pintarDivis);


let corDaDiv = 'black';
let divAnterior =document.getElementsByClassName('selected').item(0);

function pegarCor(event) {
  divAnterior.classList.remove('selected');
  const evento = event.target;
  corDaDiv = evento.style.backgroundColor;
  evento.classList.add('selected');
  divAnterior=evento;
  }

function pintarDivis(event) {
  const evento = event.target;
  evento.style.backgroundColor = corDaDiv;
}
