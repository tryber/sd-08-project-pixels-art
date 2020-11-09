window.onload = function () {
  let black = document.getElementsByClassName("color")[0];
  black.classList.add("selected");
  fillWhite();
  generatePallete();
}

function createDiv(num, parent, div_class) {
  let parent_node = document.getElementById(parent);

  while (num > 0) {
    let div = document.createElement("div");
    div.className = div_class;
    parent_node.appendChild(div);
    num--;
  }
}

createDiv(4, "color-palette", "color");
createDiv(25, "pixel-board", "pixel");

let pallet = ["black", "green", "blue", "yellow"];
let colors = document.getElementsByClassName("color");

for (let index = 0; index < colors.length; index++) {
  colors[index].style.backgroundColor = pallet[index];
}

function fillWhite() {
  let pixels = document.getElementsByClassName("pixel");
  for (pixel of pixels) {
    pixel.style.backgroundColor = "rgb(255, 255, 255)";
  }
}

let button = document.getElementById("clear-board");
button.addEventListener("click", fillWhite);

let pixels = document.getElementsByClassName("pixel");
for (pixel of pixels) {
  pixel.addEventListener("click", fillColor);
}

function fillColor(event) {
  let color = document.getElementsByClassName("selected")[0];
  event.target.style.backgroundColor = color.style.backgroundColor;
}

for (color of colors) {
  color.addEventListener("click", selectColor);
}

function selectColor(event) {
  document.getElementsByClassName("selected")[0].classList.remove("selected");
  event.target.classList.add("selected");
}

function generateColor(){
  let hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let color = hexa[Math.floor(Math.random() * 16)];
  for (var i = 1; i < 6; i++ ) {
      color += hexa[Math.floor(Math.random() * 16)];
  }
  return "#" + color;
}

function generatePallete() {
  for(let index = 1; index < colors.length; index++) {
    colors[index].style.backgroundColor = generateColor();
  }
}

let input = document.getElementById("board-size");
let button2 = document.getElementById("generate-board");

input.addEventListener("input", verifySize);
button2.addEventListener("click", generateBoard);

function verifySize() {
  input.value = input.value < 0 ? 0: input.value;
}

function generateBoard() {
  let size = input.value == "" ? alert("Board inválido!") : input.value > 50 ? 50 : input.value < 5 ? 5 : input.value;
  let board = document.getElementById("pixel-board");

  for(const pixel of pixels) {
    pixel.style.width = size + "px";
    pixel.style.height = size + "px";
  }

  board.style.width = 5 * size + "px";
  board.style.height = 5 * size + "px";
}



