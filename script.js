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

let pallet = ["red", "green", "blue", "yellow"];

let colors = document.getElementsByClassName("color");

for(let index = 0; index < colors.length; index++) {
  colors[index].style.backgroundColor = pallet[index];
}
