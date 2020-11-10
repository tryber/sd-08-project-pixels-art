window.onload = function(){
    document.querySelectorAll(".color")[0].classList.add("selected");
}

//creation of the divs in the color palette
function createDivColor() {
  let divColor = document.getElementById("color-palette");
  for (let i = 0; i < 4; i += 1) {
    let divChild = document.createElement("div");
    divChild.className = "color";
    let colors = ["black", "yellow", "green", "blue"];
    divChild.style.backgroundColor = colors[i];
    divColor.appendChild(divChild);
  }
}
createDivColor();
//creation of the pixels in the pixels board
function createSquaresBox() {
  const squareBox = document.getElementById("pixel-board");
  for (let line = 0; line < 5; line += 1) {
    // number of lines
    const row = document.createElement("div");
    for (let column = 0; column < 5; column += 1) {
      // number of pixels
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      row.appendChild(pixel); //Pixel são filhos da linha.
    }
    squareBox.appendChild(row); //As linhas são filhas do Pixel-board.
  }
}
createSquaresBox();


