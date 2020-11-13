window.onload = createTable(), coloringPallet(), blackInitialSelect();
// Função para criar a paleta de cores
function coloringPallet() {
    const palletColors = ['black', 'purple', 'green', 'pink'];
    const pallet = document.getElementsByClassName('color');
    for (let i = 0; i < palletColors.length; i += 1) {
        pallet[i].style.backgroundColor = palletColors[i];
    }
}

// Função para criar a tabela de pixels
function createTable() {
    let pixelBoard = document.getElementById('pixel-board');
    console.log(pixelBoard)
    for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < 5; j += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.backgroundColor = 'white';
            document.getElementById('pixel-board').appendChild(pixel);
        }
    }
}

//Função para selecionar cores da paleta
function blackInitialSelect () {
    const colorSelect = document.getElementsByClassName('color')[0];
    colorSelect.classList.add('selected');
}
