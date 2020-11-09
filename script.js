function createPixelBox() {
  for (index = 0; index < 25; index += 1) {
    let pixelBox = document.createElement("div");
    pixelBox.className = "pixel";
    document.getElementById("pixel-board").appendChild(pixelBox);
  }
}
createPixelBox();
