const pixel = document.querySelector('#pixel-board');

function pixelBoard() {
    for (let col = 0; col < 5; col +=1) {
        for(let line = 0; line < 5; line +=1) {
            let pix = document.createElement('div');
            pix.className = 'pixel';
            pixel.appendChild(pix)
        }
    }
}
pixelBoard();


window.onload = function() {
    document.getElementById('black').classList.add('selected');
}

const itemPalette = document.getElementsByClassName('color'); // coloco as 4 cores da classe color num array 

const paletteDiv = document.getElementById("color-palette"); // seleciono a section com o ID color-pallete
paletteDiv.addEventListener("click", CreateEventsColor); //escutador de eventos


function CreateEventsColor(event) {
    const colorClass = document.querySelector(".selected");
    colorClass.classList.remove("selected");
    event.target.classList.add("selected");
  }
  
function paintPixel() {
    const pixelSelected = document.querySelectorAll(".pixel");
    for (let index = 0; index < pixelSelected.length; index += 1) {
        pixelSelected[index].addEventListener("click", function (event) {
            let colorCurrent = document.querySelector(".selected").style
                .backgroundColor;
            event.target.style.backgroundColor = colorCurrent;
        });
    }
}
paintPixel();

function clearPixel() {
    const clearButton = document.querySelector('#clear-board');
    const color = 'white';
    clearButton.addEventListener('click', () => {
        const pixels = document.querySelectorAll('.pixel')
        for (let i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = color;
        }
    });
}