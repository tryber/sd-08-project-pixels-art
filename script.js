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

const removerSelected = document.querySelectorAll(".selected");

function alteraSelected(event) {
  let evento = event.target;
  for (index = 0; index < removerSelected.length; index += 1) {
  removerSelected[index].classList.remove("selected");
  
  evento.classList.add("selected");
}