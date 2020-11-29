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

function randomColors() {
    const getNewPalette = document.getElementsByClassName('color');    
    for(let index = 0; index < getNewPalette.length; index += 1) {
        let firstColor = Math.round(Math.random() * 255);
        let secondColor = Math.round(Math.random() * 255);
        let thridColor = Math.round(Math.random() * 255);
        getNewPalette[index].style.backgroundColor = `rgb(${firstColor}, ${secondColor}, ${thridColor})`;
    }
    getNewPalette[0].style.backgroundColor = 'black';

}
randomColors();

// função randomColors desenvolvida a partir de code review 
const generateBoard = () => {
    let newBoard = document.getElementById('generate-board');
    newBoard.addEventListener('click', createPixels());
}


function createPixels() {
    let newLength = document.getElementById('board-size');
        pixelsLength = newLength.value;
        if (pixelsLength === 0 || pixelsLength < 0) {
        alert("Board inválido!");
        } else if (pixelsLength < 5) {
            pixelsLength = 5;
        } else if (pixelsLength > 50) {
            pixelsLength = 50;
        }
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

// const VQV = () => {
//     let newLength = document.getElementById('board-size');
//     pixelsNewLength = newLength.value;
//     if (pixelsNewLength === 0 || pixelsNewLength < 0) {
//     alert("Board inválido!");
//     } else if (pixelsNewLength < 5) {
//         pixelsNewLength = 5;
//     } else if (pixelsNewLength > 50) {
//         pixelsNewLength = 50;
//     }
//     let pixelNewBoard = document.getElementById('pixel-board');
//     for (let index = 0; index < pixelsNewLength; index += 1) {
//         let newLines = document.createElement("tr");
//         newLines.className = "newLines";
//         pixelNewBoard.appendChild(newLines)
//          for (let i = 0; i < pixelsNewLength; i += 1) {
//             let newPixels = document.createElement("td");
//             newPixels.style.border = "1px solid black";
//             newPixels.style.backgroundColor = "white";
//             newPixels.className = "newPixels";
//             newPixels.addEventListener('click', makeFill);
//             newLines.appendChild(newPixels);
//          }
//         }
// }

// const generateBoard = () => {
//     let newBoard = document.getElementById('generate-board');
//     newBoard.addEventListener('click', VQV());
// }
