let pxBoard = document.getElementById("pixel-board");
let size = 5;

let colorVector = randomColors();
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

function clearBoard() {
  let pixels = document.querySelectorAll(".pixel");
  for (let pos = 0; pos < pixels.length; pos += 1) {
    pixels[pos].style.backgroundColor = "white";
  }
}

let btn = document.getElementById("clear-board");
btn.addEventListener("click", clearBoard);

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

let btnChangeSize = document.getElementById("generate-board");
let sizeText = document.getElementById("board-size");
function deleteBoard() {
  let actsize = pxBoard.children.length;
  for (let index = 0; index < actsize; index += 1) {
    pxBoard.removeChild(pxBoard.firstElementChild);
  }
}
btnChangeSize.addEventListener("click", function () {
  size = sizeText.value;
  if (size == "") {
    alert("Board inválido!");
  } else {
    if (size < 5) {
      size = 5;
    }
    if (size > 50) {
      size = 50;
    }
    deleteBoard();
    fillBoard();
    colorBoard();
  }
});

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let randColor = `rgb(${r},${g},${b})`;
  return randColor;
}

function randomColors() {
  let colorVect = ["black"];
  for (let i = 0; i < 3; i += 1) {
    colorVect.push(randomColor());
  }
  return colorVect;
}
