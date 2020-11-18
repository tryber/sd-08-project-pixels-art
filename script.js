// Requirements 2 and 3:
const colors = ["black", "red", "yellow", "blue"];
const colorPalette = document.querySelectorAll(".color");

function fillingInPalette() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor = colors[index];
  }
}
fillingInPalette();

// Requirements 4 and 5
const pixelBoard = document.getElementById("pixel-board");

function createPixels(width) {
  if (width < 5) {
    width = 5;
    boardSizeInput.value = "5";
  } else if (width > 50) {
    boardSizeInput.value = "50";
    width = 50;
  }

  const pixelsTotal = width ** 2;
  pixelBoard.style.width = (width * 40).toString() + "px";

  for (let index = 0; index < pixelsTotal; index += 1) {
    const pixel = document.createElement("button");
    pixel.className = "pixel";
    pixel.style.backgroundColor = "white";
    pixelBoard.appendChild(pixel);
  }
  console.log((width * 40).toString() + "px");
}

createPixels(5);

// Requirement 6
let selectedColor = document.getElementById("color1");

// Requirement 7
const paletteColors = document.querySelectorAll(".color");

function switchSelectedColor(event) {
  selectedColor.classList.remove("selected");
  event.target.classList.add("selected");
  selectedColor = event.target;
}

for (const colorInPalette of paletteColors) {
  colorInPalette.addEventListener("click", switchSelectedColor);
}

// Requirement 8
function paintPixel(event) {
  const pickedColor = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = pickedColor;
}

function addListenerToPixels() {
  const allPixels = document.querySelectorAll(".pixel");

  for (let pixel = 0; pixel < allPixels.length; pixel += 1) {
    allPixels[pixel].addEventListener("click", paintPixel);
  }
}

addListenerToPixels();

// Requirement 9
function clearPixels() {
	const allPixels = document.querySelectorAll(".pixel");
  for (let pixel = 0; pixel < allPixels.length; pixel += 1) {
    allPixels[pixel].style.backgroundColor = "white";
  }
}

const clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", clearPixels);

//Requirement 10
function removeAllPixels() {
  pixelBoard.innerHTML = "";
}

const boardSizeInput = document.getElementById("board-size");

function createNewBoard() {
  removeAllPixels();
  createPixels(boardSizeInput.value);
}

const generateBoardBtn = document.getElementById("generate-board");
generateBoardBtn.addEventListener("click", generateNewBoard)
function generateNewBoard () {
  if (boardSizeInput.value) {
    createNewBoard();
    addListenerToPixels();
  } else {
    alert("Board inválido!");
  }
}
