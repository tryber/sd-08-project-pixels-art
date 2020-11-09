const cores = ['black', 'red', ' blue', 'green'];
const divColorPalette = document.getElementById("color-palette");

// const body = document.body;

for (let i in cores) {
  let diviCores = document.createElement('div');
  diviCores.style = `background-color:${cores[i]};`;
  diviCores.className = 'color';
    if(i===0){
    diviCores.classList.add('select');
  }
  divColorPalette.appendChild(diviCores);
}


const pixelBoard = document.getElementById('pixel-board');

for (let i = 1; i <= 25; i++) {
  const divSpan = document.createElement('div');
  divSpan.className = 'pixel';
  pixelBoard.appendChild(divSpan);
}


pixelBoard.addEventListener('click', pintarDivPreto);

let corDaDiv = 'black';

function pintarDivPreto(event) {
  const evento = event.target;
  //console.log(evento);
  evento.style.backgroundColor = corDaDiv;
}

divColorPalette.addEventListener('click', mudaCorDiv);

function mudaCorDiv(event) {
  const evento= event.target;
  //console.log(evento);
  corDaDiv = evento.style.backgroundColor;
  console.log(corDaDiv);


}

