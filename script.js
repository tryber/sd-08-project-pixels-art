const cores = ['black', 'red', ' blue', 'green'];
const divColorPalette = document.getElementById("color-palette");

// const body = document.body;

for (let i in cores) {
  let diviCores = document.createElement('div');
  diviCores.style = `background-color:${cores[i]};`;
  diviCores.className = 'color';
  divColorPalette.appendChild(diviCores);
}


const pixelBoard = document.getElementById('pixel-board');

for(let i =1; i<=25; i++){
  const divSpan = document.createElement('div');
  divSpan.className = 'pixel';
  pixelBoard.appendChild(divSpan);
}
