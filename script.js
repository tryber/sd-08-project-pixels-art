function random255() {
  return Math.floor(Math.random() * 256);
}

const colors = ["black"];

for (let i = 1; i < 4; i += 1) {
  const red = random255();
  const green = random255();
  const blue = random255();

  colors[i] = `rgb(${red}, ${green}, ${blue})`;
}

colors.forEach((color) => {
  const paletteColors = document.createElement("div");

  paletteColors.className = "color";
  paletteColors.style.backgroundColor = color;

  document.querySelector("#color-palette").appendChild(paletteColors);
});

document.querySelector(".color").classList.add("selected");

document.querySelectorAll(".color").forEach((color, index, arr) => {
  color.addEventListener("click", () => {
    arr.forEach((element) => element.classList.remove("selected"));

    color.classList.add("selected");
  });
});

const boardSize = document.querySelector("#board-size");
const pixelBoard = document.querySelector("#pixel-board");

function generateBoard(size) {
  for (let lineNumber = 1; lineNumber <= size; lineNumber += 1) {
    const line = document.createElement("div");

    line.className = "line";

    for (let columnNumber = 1; columnNumber <= size; columnNumber += 1) {
      const column = document.createElement("div");

      column.className = "pixel";
      column.style.backgroundColor = "white";

      line.appendChild(column);
    }
    pixelBoard.appendChild(line);
  }
}

generateBoard(5);

const pixels = document.querySelectorAll(".pixel");

function addColorListener(pixelsArr) {
  pixelsArr.forEach((pixel) => {
    pixel.addEventListener("click", () => {
      const colorToApply = document.querySelector(".selected").style
        .backgroundColor;

      pixel.style.backgroundColor = colorToApply;
    });
  });
}

addColorListener(pixels);

document.querySelector("#generate-board").addEventListener("click", () => {
  if (boardSize.value != "") {
    for (let i = pixelBoard.children.length - 1; i >= 0; i -= 1) {
      pixelBoard.children[i].remove();
    }
    if (boardSize.value < 5) {
      generateBoard(5);
    } else if (boardSize.value > 50) {
      generateBoard(50);
    } else {
      generateBoard(boardSize.value);
    }
    addColorListener(document.querySelectorAll(".pixel"));
  } else {
    alert("Board inválido!");
  }
});

document.querySelector("#clear-board").addEventListener("click", () => {
  pixels.forEach((pixel) => { pixel.style.backgroundColor = "white" });
});
