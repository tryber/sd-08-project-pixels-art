function createDivs() {
  const arrayColor = ["black", "purple", "red", "green"];
  const palletDiv = document.getElementById("color-palette");
  for (let index = 0; index < arrayColor.length; index += 1) {
    let divColor = arrayColor[index];
    const myDivs = document.createElement("div");
    palletDiv.appendChild(myDivs);
    myDivs.className = "color";
    myDivs.style.backgroundColor = divColor;
  }
}
createDivs();

function createBoxPixels() {
  const boxPixels = document.getElementById("pixel-board");
  for (let colun = 0; colun < 5; colun += 1) {
    const createPixel = document.createElement("div");
    boxPixels.appendChild(createPixel);
    for (let line = 0; line < 5; line += 1) {
      const createPixel = document.createElement("div");
      createPixel.className = "pixel";
      boxPixels.appendChild(createPixel);
    }
  }
}
createBoxPixels();
