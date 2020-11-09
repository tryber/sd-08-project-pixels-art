window.onload = function () {
  let black = document.getElementsByClassName("color")[0];
  black.classList.add("selected");
}

function createDiv(num, parent, div_class) {
  let parent_node = document.getElementById(parent);

  while(num > 0) {
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
for(let index = 0; index < colors.length; index++) {
  colors[index].style.backgroundColor = pallet[index];
}

let pixels = document.getElementsByClassName("pixels");
for(pixel of pixels) {
  pixel.style.backgroundColor = "rgb(255, 255, 255)";
}
