const colors = ["black", "green", "purple", "yellow"];
function createDivs() {
    let newPalette = document.getElementById('color-palette');
    for (let i = 0; i < colors.length; i += 1) {
        let newDivs = document.createElement("div");
        newDivs.className = "color";
        if (i === 0) {
            newDivs.className += " selected"; //.classList.add("classe")
        }
        newDivs.style.border = "1px solid black";
        newDivs.style.backgroundColor = colors[i];
        newPalette.appendChild(newDivs)
        newDivs.addEventListener('click', makeEvents);
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
            pixel.addEventListener('click', makeFill);
            line.appendChild(pixel);
         }
     }
    }
createPixels();


function makeEvents(event) {
    let unselect = document.getElementsByClassName('selected');
    unselect[0].classList.remove('selected');
    event.target.classList.add('selected');
}



function makeFill() {
    let getPixel = document.getElementsById('pixel');
    let getColor = document.getElementsByClassName('selected');
    pixel.style.backgroundColor = getColor
}

let getButton = document.getElementById('clear-board')
getButton.addEventListener('click', clearAll);
function clearAll() {
    let getPixel = document.getElementsById('pixel');
    getPixel.style.backgroundColor = "white"
}
