const colors = ["black", "green", "purple", "yellow"];
function createDivs() {
    let newPalette = document.getElementById('color-palette')
    for (i = 0; i < colors.length; i += 1) {
        let color = colors[i];
        let newDivs = document.createElement("div");
        newDivs.className = "color"
        newDivs.style.border = "1px solid"
        newDivs.style.backgroundColor = color
        newPalette.appendChild(newDivs)
    }
}
createDivs();

const pixelsLength = 5;
function createPixels() {
    let pixelBoard = document.getElementById('pixel-board');
    for (i = 0; i < pixelsLength; i += 1) {
        let line = document.createElement("tr");
        line.className = `linha${i}`;
        pixelBoard.appendChild(line)
     }
     for (index = 0; index < pixelsLength; index += 1) {
         for (i = 0; i < pixelsLength; i += 1) {
            let columPixel = document.querySelector(`.linha${i}`);
            let pixel = document.createElement("td");
            pixel.style.border = "1px solid"
            pixel.className = "pixel";
            columPixel.appendChild(pixel)  
         }
     }
}
createPixels();