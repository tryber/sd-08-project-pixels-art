const paletaDeCores = document.getElementById("color-palette");
const tabelaDeCores = ["black", "blue", "green", "red"];
for (let itens = 0; itens < tabelaDeCores.length; itens += 1) {
  let color = document.createElement("div");
  color.className = "color";
  color.style.background = tabelaDeCores[itens];
  color.style.display = "inline-block";
  color.style.width = "100px";
  color.style.border = "solid 1px";
  paletaDeCores.appendChild(color);
  let text = document.createElement("p");
  text.innerHTML = tabelaDeCores[itens];
  text.style.textAlign = "center";
  text.style.color = "#fff";
  color.appendChild(text);
}
const quadroDePixels = document.getElementById("pixel-board");
quadroDePixels.style.width = "400px";
quadroDePixels.style.height = "400px";
quadroDePixels.style.textAlign = "center";
for (let altura = 0; altura < 5; altura += 1) {
  let quebraDeLinha = document.createElement("br");
  for (let comprimento = 0; comprimento < 5; comprimento += 1) {
    var pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.background = "white";
    pixel.style.border = "solid black 1px";
    pixel.style.display = "inline-block";
    pixel.style.width = "40px";
    pixel.style.height = "40px";
    quadroDePixels.appendChild(pixel);
  }
  quadroDePixels.appendChild(quebraDeLinha);
}
const reset = () => {
  for (let item in seletorDeCores) {
    seletorDeCores[item].className = "color";
  }
};
document.querySelector(".color").classList.add("selected");
let seletorDeCores = paletaDeCores.querySelectorAll("div");
let aquarela = quadroDePixels.querySelectorAll(".pixel");
for (
  let coresDaPaleta = 0;
  coresDaPaleta < seletorDeCores.length;
  coresDaPaleta += 1
) {
  seletorDeCores[coresDaPaleta].addEventListener("click", () => {
    reset();
    seletorDeCores[coresDaPaleta].classList.add("selected");
  });
}
for (let pixel in aquarela) {
  aquarela[pixel].addEventListener("click", () => {
    let cor = document.querySelector(".selected").style.background;
    aquarela[pixel].style.background = cor;
  });
}
