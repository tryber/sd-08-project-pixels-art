//creation of the divs in the color palette
function createDivColor() {
  let divColor = document.getElementById("color-palette");
  for (let i = 0; i < 4; i += 1) {
    let divChild = document.createElement("div");
    divChild.className = "color";
    divColor.appendChild(divChild);
  }
  let divChild = divColor.children;

  divChild[0].style.background = "black";
  divChild[1].style.background = "red";
  divChild[2].style.background = "purple";
  divChild[3].style.background = "green";
}
createDivColor();
//creation of the pixels in the pixels board
function createSquaresBox (){
    const squareBox = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) { // number of lines
  const row = document.createElement('div');
  for (let j = 0; j < 5; j += 1) { // number of pixels
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    row.appendChild(pixel);//Pixel são filhos da linha.
  }
  squareBox.appendChild(row);//As linhas são filhas do Pixel-board.
}
}
createSquaresBox();



