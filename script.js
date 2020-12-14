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

function geraPaletaDeCores() {

}


