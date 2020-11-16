const board = document.querySelector('#pixel-board');

function criaPixelBoard(number) {
    for (let linha = 0; linha < number; linha +=1) {
        let line = document.createElement('div');
        board.appendChild(line);
        for (let col = 0; col < number; col += 1) {
            const pixels = document.createElement('div');
            pixels.className = 'pixel';
            line.appendChild(pixels);
        }
    }
}

window.onload = criaPixelBoard(5);

function colorirPixel(e) {
    if (e.target.className === 'color') {
    document.querySelector('.selected').className = 'color';
    e.target.className = 'color selected';
    }
    
    if (e.target.className === 'pixel') {
        let cor = document.querySelector('.selected').id;
        e.target.id = cor;
    }
}

let palette = document.querySelector('#color-palette');
palette.addEventListener('click', colorirPixel);
board.addEventListener('click', colorirPixel);
