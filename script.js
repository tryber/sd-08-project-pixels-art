let pxBoard = document.getElementById("pixel-board");
let size = 5;

let colorVector = ["black", "yellow", "red", "blue"];
let colors = document.getElementById("color-palette");

for (let index = 0; index < colors.children.length; index += 1) {
  colors.children[index].style.backgroundColor = colorVector[index];
}

function fillBoard() {
  for (let row = 0; row < size; row += 1) {
    let linha = document.createElement("ul");
    for (let column = 0; column < size; column += 1) {
      let column = document.createElement("li");
      column.className = "pixel";
      column.style.backgroundColor = "white";
      linha.appendChild(column);
    }
    pxBoard.appendChild(linha);
  }
}

function clearSelection() {
  for (color of colors.children) {
    color.classList.remove("selected");
  }
}
for (color of colors.children) {
  color.addEventListener("click", function (e) {
    clearSelection();
    e.target.classList.add("selected");
  });
}

function colorBoard() {
  for (row of pxBoard.children) {
    for (element of row.children) {
      element.addEventListener("click", function (e) {
        let color = document.querySelector(".selected").style.backgroundColor;
        e.target.style.backgroundColor = color;
      });
    }
  }
}
window.onload = function () {
  //black selected
  colors.children[0].classList.add("selected");
  fillBoard();
  colorBoard();
};
