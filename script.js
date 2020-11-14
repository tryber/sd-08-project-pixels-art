let colors = ["black", "red", "yellow", "blue"];
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
//criação evento
colorPalet.addEventListener("click", alteraSelected);

const removederSeletect = document.getElementsByClassName("selected");

function alteraSelected(event) {
  for (let i = 0; i < removederSeletect.length; i++) {
    removederSeletect[i].classList.remove("selected");
  }
  const evento = event.target;
  corDaDiv = evento.style.backgroundColor;
  evento.classList.add("selected");
}
