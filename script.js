const main = document.getElementById("main");
const paletaDeCores = document.getElementById("color-palette");
const coresDaPaleta = document.getElementsByClassName("color");

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
