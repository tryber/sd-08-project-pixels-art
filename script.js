window.onload = createTable(), coloringPallet();

function coloringPallet() {
    const palletColors = ['black', 'purple', 'green', 'pink'];
    const pallet = document.getElementsByClassName('color');
    for (let i = 0; i < palletColors.length; i += 1) {
        pallet[i].style.backgroundColor = palletColors[i];
    }
}

function createTable() {
    let pixelBoard = document.getElementById('pixel-board');
    console.log(pixelBoard)
    for (let i = 0; i < 5; i += 1) {
        for (let j = 0; j < 5; j += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            document.getElementById('pixel-board').appendChild(pixel);
        }
    }
}