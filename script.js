const colorPalette = document.querySelector("#color-palette");

function geraNumeroRandom() {
  return Math.floor(Math.random() * 256);
}

function geraCoresRandomRGB() {
  let red = geraNumeroRandom();
  let green = geraNumeroRandom();
  let blue = geraNumeroRandom();
  return `rgb( ${red} , ${green} , ${blue})`;
}

function geraArrayDeCores() {
  let cores = ["black"];
  while (cores.length < 4) {
    cores.push(geraCoresRandomRGB());
  }
  return cores;
}

function geraPaletaDeCores() {
  const cores = geraArrayDeCores();
  for(let index = 0; index < cores.length; index += 1) {
    const paletaDeCores = document.createElement('div');
    paletaDeCores.style.backgroundColor = cores[index];
    paletaDeCores.className = 'color';
    colorPalette.appendChild(paletaDeCores);
  }
}

geraPaletaDeCores();
