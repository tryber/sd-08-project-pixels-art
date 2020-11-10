window.onload = function () {
  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgbColor = `rgb(${r},${g},${b})`;
    return rgbColor;
  }

  colorOptions[0].style.backgroundColor = "rgb(0,0,0)";
  for (let index = 1; index < colorOptions.length; index +=1) {
  colorOptions[index].style.backgroundColor = randomColor();
}
};

let pixelBox = document.getElementById("pixel-board");
function removeGrid() {
  let pixelCounter = document.querySelectorAll(".pixel");
  for (let index = 0; index < pixelCounter.length; index += 1) {
    let removeDiv = pixelBox.lastElementChild;
    pixelBox.removeChild(removeDiv);
  }
}

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
    removeGrid();
    let gridSize = inputNumber.value;
    if (gridSize < 5) {
      gridSize = 5;
    } else if (gridSize > 50) {
      gridSize = 50;
    }
    for (let index = 0; index < gridSize * gridSize; index += 1) {
      let pixelCreate = document.createElement("div");
      pixelCreate.className = "pixel";
      pixelBox.appendChild(pixelCreate);
    }
    pixelBox.style.gridTemplateColumns = `repeat(${gridSize}, 40px)`;
    pixelBox.style.gridTemplateRows = `repeat(${gridSize}, 40px)`;
  } else {
    alert("Board inválido!");
  }
  inputNumber.value = null;
}
inputNumber.value = 5;
createPixelBox();

let colorOptions = document.querySelectorAll(".color");
let selectedColor = "rgb(0,0,0)";
const colorPicker = document.getElementById("color-palette");
colorPicker.addEventListener("click", function (event) {
  if (event.target.className == "color") {
    for (let index = 0; index < colorOptions.length; index += 1) {
      colorOptions[index].className = "color";
    }
    event.target.className = "color selected";
    if (event.target.className == "color selected");
    selectedColor = event.target.style.backgroundColor;
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
