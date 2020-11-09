window.onload = function() {
  let board = document.getElementById("pixel-board");
  let palette = document.getElementById("color-palette");
  let color;
  let pixel;
  let line;
  let selected;
  let currentColor;

  let size = 5;

  for (let i = 0; i < 4; i += 1) {
    color = document.createElement("div");
    color.addEventListener("click", event => {
      for (let colPixel of palette.children) {
        colPixel.className = "color";
      }
      event.target.className = "color selected";

      selected = document.getElementsByClassName("selected")[0];
      currentColor = selected.style.backgroundColor;
    });

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

  selected = document.getElementsByClassName("selected")[0];
  currentColor = selected.style.backgroundColor;

  for (let i = 0; i < size; i += 1) {
    line = document.createElement("div");
    line.className = "pixel-line";

    for (let i = 0; i < size; i += 1) {
      pixel = document.createElement("div");
      pixel.className = "pixel";
      pixel.style.backgroundColor = "white";
      pixel.addEventListener('click', event => {
        event.target.style.backgroundColor = currentColor;
      })
      line.appendChild(pixel);
    }

    board.appendChild(line);
  }
}