let pxBoard = document.getElementById("pixel-board");
let size = 5;

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

let colors = document.getElementById("color-palette");

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

window.onload = function () {
  //black selected
  colors.children[0].classList.add("selected");
  fillBoard();
};
