
let colors = ["black", "yellow", "green", "blue"];
//creation of the divs in the color palette.
function createDivColor() {
  let divColor = document.getElementById("color-palette");
  for (let i = 0; i < 4; i += 1) {
    let divChild = document.createElement("div");
    divChild.className = "color";
    divChild.style.backgroundColor = colors[i];
    divColor.appendChild(divChild);
  }
}

function firstColorSelected() {
  document.querySelectorAll(".color")[0].classList.add("selected");
}

createDivColor();
firstColorSelected();
//creation of the pixels in the pixels board.
function createBox() {
  const squareBox = document.getElementById("pixel-board");
  for (let line = 0; line < 5; line += 1) {
    // number of lines
    const row = document.createElement("div");
    for (let column = 0; column < 5; column += 1) {
      // number of pixels
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      pixel.addEventListener("click", function (event) {
        event.target.style.backgroundColor = colorActual;
      });
      row.appendChild(pixel); //Pixel são filhos da linha.
    }
    squareBox.appendChild(row); //As linhas são filhas do Pixel-board.
  }
}
createBox();

//By clicking on a pixel within the frame after selecting a color in the palette

let colorActual = colors[0];
const palletColors = document.getElementById("color-palette");

function pixelColorSelected() {
  let pallettSelected = palletColors.querySelector(".selected");
  colorActual = pallettSelected.style.backgroundColor;
}

//creation creation of the function that selects the colors to be changed on the pixel board.

//recovery colors in the HTML.
let arrColors = document.getElementsByClassName("color");
for (let i = 0; i < arrColors.length; i += 1) {
  
  let colorsElement = arrColors[i];
  colorsElement.addEventListener("click", function () {
    for (let i = 0; i < arrColors.length; i += 1) {
      arrColors[i].classList.remove("selected");
    }
    colorsElement.classList.add("selected");
    pixelColorSelected();
  });
} //scrolling through variable array colors and adding event click.

//button to clean the board.
const buttonClearBoard = document.getElementById("clear-board");
buttonClearBoard.addEventListener("click", clearBoard);
