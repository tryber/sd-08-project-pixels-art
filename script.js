let colors = ["black", "red", "yellow", "blue"];
let tamanhoDoQuadro = document.getElementById('board-sizer');
let botaGerarQuadrados = document.getElementById('generate-board');
let paletaDeCores = document.querySelector("#color-palette");
let pixelBoard = document.querySelector("#pixel-board");
let cor = "black";
let limparPixels = document.querySelector("#clear-board");
botaGerarQuadrados.addEventListener('click', gerarTabela);
limparPixels.addEventListener("click", limpaTabela);
paletaDeCores.addEventListener("click", alteraSelected);
pixelBoard.addEventListener("click", pintaPixel);

function geraPaletaDeCores() { // Função que gera paleta de cores
  for (let index = 0; index < colors.length; index += 1) {
    let divPalet = document.createElement("div");
    paletaDeCores.appendChild(divPalet);
    divPalet.className = "color";
    divPalet.style.backgroundColor = colors[index];
    if (index == 0) {
      divPalet.classList.add("selected");
    }
  }
}
geraPaletaDeCores();
function gerarTabela() {
  let numeroDeQuadros = tamanhoDoQuadro.value;
  if (tamanhoDoQuadro.value === '') {
    numeroDeQuadros = 5;
  }
  if (numeroDeQuadros < 5) {
    numeroDeQuadros = 5;
  }
  if (numeroDeQuadros > 50) {
    numeroDeQuadros = 50;
  }
  pixelBoard.innerHTML = '';
  for (let index = 0; index < numeroDeQuadros; index++) {
    let maePixexl = document.createElement('div');
    pixelBoard.appendChild(maePixexl);
    for (let j = 0; j < numeroDeQuadros; j++) {
      let divTable = document.createElement("div");
      maePixexl.appendChild(divTable);
      divTable.className = "pixel";
      divTable.style.backgroundColor = "white";
    }
  }
}
gerarTabela();

function alteraSelected(event) {
  let removederSeletect = document.getElementsByClassName("selected");
  for (let i = 0; i < removederSeletect.length; i++) {
    removederSeletect[i].classList.remove("selected");
  }
  let evento = event.target;
  cor = evento.style.backgroundColor;
  evento.classList.add("selected");
}
function pintaPixel(event) {
  let evento = event.target;
  evento.style.backgroundColor = cor;
}
function limpaTabela() {
  let cadaPixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < cadaPixel.length; i++) {
    cadaPixel[i].style.backgroundColor = "white";
  }
}
