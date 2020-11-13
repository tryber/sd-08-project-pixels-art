window.onload = createTable(), coloringPallet(), blackInitialSelect();
// Função para criar a paleta de cores
function coloringPallet() {
    const palletColors = ['rgb(0, 0, 0)', 'rgb(128, 0, 128)', 'rgb(0, 102, 0)', 'rgb(255, 26, 255)'];
    const pallet = document.getElementsByClassName('color');
    for (let i = 0; i < palletColors.length; i += 1) {
        pallet[i].style.backgroundColor = palletColors[i];
    }
}

// Função para criar a tabela de pixels
function createTable() {
    let pixelBoard = document.getElementById('pixel-board');
    for (let i = 0; i < 5; i += 1) {
        let tableRow = document.createElement('tr')
        tableRow.className = 'table-row'
        document.getElementById('pixel-board').appendChild(tableRow)
        for (let j = 0; j < 5; j += 1) {
            let pixel = document.createElement('td');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'rgb(255, 255, 255)';
            document.getElementsByClassName('table-row')[i].appendChild(pixel);
        }
    }
}

//Função para selecionar cores da paleta
function blackInitialSelect () {
    const colorSelect = document.getElementsByClassName('color')[0];
    colorSelect.classList.add('selected');
}

//Event listener
document.addEventListener('click', function (event) {
    if ( event.target.classList.contains('color')) {
        let removeSelect = document.getElementsByClassName('selected')[0];
        removeSelect.classList.remove('selected');
        event.target.classList.add('selected');
    } else if (event.target.classList.contains('pixel')) {
        let whichPallet = document.getElementsByClassName('selected')[0];
        let palletColor = window.getComputedStyle(whichPallet, null).getPropertyValue("background-color");
        event.target.style.backgroundColor = palletColor;
    } else if (event.target.classList.contains('clear-board')) {
        let pixelElement = document.getElementsByClassName('pixel');
        for (let k = 0; k < pixelElement.length; k += 1) {
            pixelElement[k].style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }
}, false);
