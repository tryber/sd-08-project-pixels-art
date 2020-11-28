function randomColors() {
    const getNewPalette = document.getElementsByClassName('color');    
    for(let color of getNewPalette) {
        let redColorGenerate = Math.round(Math.random() * 255);
        let greenColorGenerate = Math.round(Math.random() * 255);
        let blueColorGenerate = Math.round(Math.random() * 255);
        color.style.backgroundColor = `rgb(${redColorGenerate}, ${greenColorGenerate}, ${blueColorGenerate})`;
    }
    getNewPalette[0].style.backgroundColor = 'black';
9

}

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


function makeFill(event) {
    let getColor = document.getElementsByClassName('selected');
    let getPixel = document.getElementsByClassName('pixel');
    event.target.style.backgroundColor = getColor[0].style.backgroundColor;
}


let getButton = document.getElementById('clear-board')
getButton.addEventListener('click', clearAll);
function clearAll() {
    let getPixel = document.getElementsByClassName('pixel');
    for (let i=0; i < getPixel.length; i += 1) {
    getPixel[i].style.backgroundColor = "white"
    }
}
