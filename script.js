let colors = ["black", "red", "yellow", "blue"];

let colorPalet = document.querySelector("#color-palette");
let pixelBoard = document.querySelector("#pixel-board");

for (let index = 0; index < colors.length; index += 1) {
  let divPalet = document.createElement("div");
  colorPalet.appendChild(divPalet);
  divPalet.className = "color";
  divPalet.style.backgroundColor = colors[index];
}

for (let index = 0; index < 25; index += 1) {
  let divTable = document.createElement("div");
  pixelBoard.appendChild(divTable);
  divTable.className = "pixel";
  divTable.style.backgroundColor = "white";
}
