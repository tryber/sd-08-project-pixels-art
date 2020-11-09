let createPixels = () => {
  for (let i = 0; i < 25; i++) {
    let board = document.querySelector(".pixel-board");
    let pixel = document.createElement("div");
    pixel.className = "pixel";

    board.appendChild(pixel);
  }
};

createPixels();
