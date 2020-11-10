let colors = ['black', 'blue', 'orange', 'green'];

function createPalletColors() {
    let divColorPallet = document.getElementById("color-palette");
    for (let i = 0; i < 4; i += 1) {
        let divChild = document.createElement("div");
        divChild.className = "color"; 
        divChild.style.backgroundColor = colors[i];
        divColorPallet.appendChild(divChild);
    }
}

function palletSelected() {
    document.querySelectorAll('.color')[0].classList.add('selected');
}

createPalletColors();
palletSelected();

function createSquares() {
    let squares = document.getElementById('pixel-board');
    for (let i = 0; i < 5; i += 1) { // quantidade de linhas
        let row = document.createElement('div');
        for (let j = 0; j < 5; j += 1) { // quantidade de pixel
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.addEventListener("click", function(event) {
            event.target.style.backgroundColor = actual;
            });
            row.appendChild(pixel);
        }
        squares.appendChild(row);
    }
}

createSquares();


let actual = colors[0];
let allColors = document.getElementById("color-palette");;

function selectColors() {
    let selector = allColors.querySelector(".selected");
    actual = selector.style.backgroundColor;
}

let colorSelector = document.getElementsByClassName("color");
for (let i = 0; i < colorSelector.length; i += 1) {

    let elements = colorSelector[i];
    elements.addEventListener("click", function() {
        for (let i = 0; i < colors.length; i += 1) {
            colorSelector[i].classList.remove("selected");
        }
        elements.classList.add("selected");
        selectColors();
    });
}

