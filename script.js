let colors = ["black", "red", "yellow", "green"];
let colorPalet = document.querySelector("#color-palette");
let pixelBoard = document.querySelector("#pixel-board");

//crição paleta de cores
for (let index = 0; index < colors.length; index += 1) {
  let divPalet = document.createElement("div");
  colorPalet.appendChild(divPalet);
  divPalet.className = "color";
  divPalet.style.backgroundColor = colors[index];
  //adicionando o selected para o primeiro elemento do array
  if (index == 0) {
    divPalet.classList.add("selected");
  }
}
//criação da tabela
for (let index = 0; index < 25; index += 1) {
  let divTable = document.createElement("div");
  pixelBoard.appendChild(divTable);
  divTable.className = "pixel";
  divTable.style.backgroundColor = "white";
}
//criação evento remover e adicionar selected

colorPalet.addEventListener("click", alteraSelected);

const removederSeletect = document.getElementsByClassName("selected");

let cor = "black";

function alteraSelected(event) {
  for (let i = 0; i < removederSeletect.length; i++) {
    removederSeletect[i].classList.remove("selected");
  }
  const evento = event.target;
  cor = evento.style.backgroundColor;
  evento.classList.add("selected");
}
//Criação de evento para pintar os pixels
pixelBoard.addEventListener("click", pintaPixel);

function pintaPixel(event) {
  let evento = event.target;
  evento.style.backgroundColor = cor;
}

//Criação de evento para limpar
const limparPixels = document.querySelector("#clear-board");
let cadaPixel = document.querySelectorAll(".pixel");

limparPixels.addEventListener("click", limpaTabela);

function limpaTabela() {
  for (let valor of cadaPixel) {
    valor.style.backgroundColor = "white";
  }
}
