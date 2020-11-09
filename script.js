window.onload = () => {
  let board = document.getElementById("pixel-board");
  let palette = document.getElementById("color-palette");
  let clearButton = document.getElementById("clear-board");

  let size = 5;

  generatePalette(palette);
  generateBoard(size, board);

  clearButton.addEventListener("click", event => {
    let pixels = document.getElementsByClassName("pixel");

    for (pix of pixels) {
      pix.style.backgroundColor = "white";
    }
  })
}

function generatePalette(palette) {
  for (let i = 0; i < 4; i += 1) {
    let color = document.createElement("div");
    color.addEventListener("click", event => {
      for (colPixel of palette.children) {
        colPixel.className = "color";
      }
      event.target.className = "color selected";
    });

    if (palette.children.length === 0) {
      color.className = "color selected";
      color.style.backgroundColor = "black";
      palette.appendChild(color);
    } else {
      let colGen = generateRandomColor();

      color.className = "color";
      color.style.backgroundColor = `rgb(${colGen})`;
      palette.appendChild(color);
    }
  }
}

function generateBoard(size, board) {
  for (let i = 0; i < size; i += 1) {
    let line = createLine(size);
    board.appendChild(line);
  }
}

function createLine(size) {
  let currentColor;
  let line = document.createElement("div");
  line.className = "pixel-line";

  for (let i = 0; i < size; i += 1) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.backgroundColor = "white";
    pixel.addEventListener('click', event => {
      currentColor = document.getElementsByClassName("selected")[0].style.backgroundColor;
      event.target.style.backgroundColor = currentColor;
    })

    line.appendChild(pixel);
  }

  return line;
}

function generateRandomColor() {
  return `${Math.ceil(Math.random() * 254)} , ${Math.ceil(Math.random() * 254)}
   , ${Math.ceil(Math.random() * 254)}`;
}