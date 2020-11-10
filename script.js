window.onload = function () {
  colorOptions[0].style.backgroundColor = "black";
  colorOptions[1].style.backgroundColor = "red";
  colorOptions[2].style.backgroundColor = "blue";
  colorOptions[3].style.backgroundColor = "yellow";
};

let pixelBox = document.getElementById("pixel-board");

function initialGrid() {
  for (let index = 0; index < 25; index += 1) {
    let pixelCreate = document.createElement("div");
    pixelCreate.className = "pixel";
    pixelBox.appendChild(pixelCreate);
  }
  pixelBox.style.gridTemplateColumns = "repeat(5, 40px)";
  pixelBox.style.gridTemplateRows = "repeat(5, 40px)";
}
initialGrid();


let generateButton = document.getElementById("generate-board");
let inputNumber = document.getElementById("board-size");

generateButton.addEventListener("click", function () {
  createPixelBox();
});

inputNumber.addEventListener("keypress", function (press) {
  if (press.key === "Enter") {
    createPixelBox();
  }
});

function createPixelBox() {
  if (inputNumber.value.length > 0 && inputNumber.value > 0) {
    let gridSize = inputNumber.value;
    for (let index = 0; index < gridSize * gridSize; index += 1) {
      let pixelCreate = document.createElement("div");
      pixelCreate.className = "pixel";
      pixelBox.appendChild(pixelCreate);
    }
    pixelBox.style.gridTemplateColumns = "repeat(" + gridSize + ", 40px)";
    pixelBox.style.gridTemplateRows = "repeat(" + gridSize + ", 40px)";
  } else {
    alert("Board inválido!");
  }
}

let colorOptions = document.querySelectorAll(".color");
let selectedColor = "black";
const colorPicker = document.getElementById("color-palette");
colorPicker.addEventListener("click", function (event) {
  if (event.target.className == "color") {
    for (let index = 0; index < colorOptions.length; index += 1) {
      colorOptions[index].className = "color";
    }
    event.target.className = "color selected";
    if (event.target.className == "color selected");
    selectedColor = event.target.style.backgroundColor;
    console.log(selectedColor);
  }
});

pixelBox.addEventListener("click", function (event) {
  event.target.style.backgroundColor = selectedColor;
});

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", function () {
  let pixelElements = document.querySelectorAll(".pixel");
  for (let index = 0; index < pixelElements.length; index += 1) {
    pixelElements[index].style.backgroundColor = "white";
  }
});
