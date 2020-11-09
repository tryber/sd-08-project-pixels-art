window.onload = function () {
  let black = document.getElementsByClassName("color")[0];
  black.classList.add("selected");
  fillWhite();
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
