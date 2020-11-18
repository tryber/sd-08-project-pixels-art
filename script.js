const colors = ["black", "green", "purple", "yellow"];
function createDivs() {
    let newPalette = document.getElementById('color-palette');
    for (let i = 0; i < colors.length; i += 1) {
        let newDivs = document.createElement("div");
        if (i === 0) {
            newDivs.className = "selected";
        }
        newDivs.className = "color";
        newDivs.style.border = "1px solid black";
        newDivs.style.backgroundColor = colors[i];
        newPalette.appendChild(newDivs)
    }
}
createDivs();

const pixelsLength = 5;
function createPixels() {
    let pixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < pixelsLength; index += 1) {
        let line = document.createElement("tr");
        line.className = "lines";
        pixelBoard.appendChild(line)
         for (let i = 0; i < pixelsLength; i += 1) {
            let pixel = document.createElement("td");
            pixel.style.border = "1px solid black";
            pixel.style.backgroundColor = "white";
            pixel.className = "pixel";
            line.appendChild(pixel)  
         }
     }
    }
createPixels();


function makeEvents() {
    let unselect = document.getElementsById('color-palette');
    for (let i = 0; i < colors.length; i += 1) {
        if (colors[i].className = "selected") {
            colors.classList.remove('.selected');
        }
        unselect.event.target.classList.add('.selected');
    }
}
colors.addEventListener('click', makeEvents);
