const main = document.getElementById("main");
const paletaDeCores = document.getElementById("color-palette");
const coresDaPaleta = document.getElementsByClassName("color");
const quadroDePixels = document.createElement("ul");
const pixels = document.createElement("li");

function criaAsCoresDaPaleta() {
  coresDaPaleta[0].style.backgroundColor = "rgb(0,0,0)";
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
  pixels.className = "pixel";
  pixels.style.backgroundColor = "rgb(255,255,255)";
  main.appendChild(quadroDePixels);
  quadroDePixels.appendChild(pixels);
}
