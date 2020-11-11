// criar 5 tr's e 5 td's em cada TR



function creatingLinesAndCells() {
    const table = document.getElementById('pixel-board');
    for (let i = 0; i < 5; i += 1) {
        const line = document.createElement('div');
        line.className = "linha";
        table.appendChild(line);

        for (let j = 0; j < 5; j += 1) {
            const cell = document.createElement('div');
            line.appendChild(cell);
            cell.className = "pixel";
        }

    }
}

creatingLinesAndCells();


// REQUISITO 6

let AllColors = document.getElementsByClassName('color');

function SelectColor() {
    AllColors[0].classList.add('selected');
}
SelectColor();

// REQUISITO 7
function clickinColor() {
    for (let i of AllColors) {
        i.addEventListener('click', AddingRemoving);
    }

}
clickinColor();

function AddingRemoving(event) {
    for (let index = 0; index < AllColors.length; index += 1) {
        AllColors[index].classList.remove('selected');
        AllColors[index] = event.target.classList.add('selected');
    }
}

// REQUISITO 8

function SelecPixel() {

    let cell = document.getElementsByClassName('pixel');
    for (let index = 0; index < cell.length; index += 1) {
        cell[index].addEventListener('click', function(event) {
            let colorSelected = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
            event.target.style.backgroundColor = colorSelected;


        })

    }
}

SelecPixel();