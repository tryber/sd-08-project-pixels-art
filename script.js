window.onload = function() {
  let board = document.getElementById("pixel-board");
  let palette = document.getElementById("color-palette");
  let color;
  let pixel;
  let line;

  let size = 5;

  for (let i = 0; i < 4; i += 1) {
    color = document.createElement("div");
    color.className = "color";

    if (palette.children.length === 0) {
      color.className = "color selected";
      color.style.backgroundColor = "black";
      palette.appendChild(color);
    } else {
      let colGen = `${Math.ceil(Math.random() * 254)}, ${Math.ceil(Math.random() * 254)}, ${Math.ceil(Math.random() * 254)}`;

      color.className = "color";
      color.style.backgroundColor = `rgb(${colGen})`;
      palette.appendChild(color);
    }
  }

  for (let i = 0; i < size; i += 1) {
    line = document.createElement("div");
    line.className = "pixel-line";

    for (let i = 0; i < size; i += 1) {
      pixel = document.createElement("div");
      pixel.className = "pixel";
      line.appendChild(pixel);
    }

    board.appendChild(line);
  }
}