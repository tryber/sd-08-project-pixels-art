const main = document.getElementById("main");
const paletaDeCores = document.getElementById("color-palette");
const coresDaPaleta = document.getElementsByClassName("color");
const red = Math.floor(Math.random() * 0);
const green = Math.floor(Math.random() * 0);
const blue = Math.floor(Math.random() * 0);
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
const quadroDePixels = document.createElement("ul");

function criaAsCoresDaPaleta() {
  coresDaPaleta[0].style.backgroundColor = `rgb(${red},${green},${blue})`;
  for (let i = 1; i <= 3; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    coresDaPaleta[i].style.backgroundColor = `rgb(${r},${g},${b})`;
  }
}
criaAsCoresDaPaleta();

function criaQuadroDePixels() {
  quadroDePixels.id = "pixel-board";

  main.appendChild(quadroDePixels);
  for (let i = 1; i <= 5; i += 1) {
    for (let j = 1; j <= 5; j += 1) {
      const pixels = document.createElement("li");
      pixels.className = "pixel";
      pixels.style.backgroundColor = "rgb(255,255,255)";
      quadroDePixels.appendChild(pixels);
    }
    const quebraDeLinha = document.createElement("br");
    quadroDePixels.appendChild(quebraDeLinha);
  }
}
criaQuadroDePixels();
