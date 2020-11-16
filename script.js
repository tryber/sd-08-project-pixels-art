function criaPixelBoard(number) {
    for (let linha = 0; linha < number; linha +=1) {
        let row = document.createElement('div');
        row.className = 'tr';
        let board = document.querySelector('#pixel-board');
        board.appendChild(row);
        for (let col = 0; col < number; col += 1) {
            const pixels = document.createElement('div');
            pixels.className = 'pixel';
            row.appendChild(pixels);
        }
    }
};

window.onload = criaPixelBoard(5);

function colorirPixel(e) {
    if (e.target.className === 'color') {
    e.target.className += ' selected';
    } else if (e.target.className === 'selected') {
        e.target.removeAttribute('className', ' selected');
    }

    if (e.target.className === 'pixel') {
        let cor = document.querySelector('.selected').id;
        e.target.id = cor;
    }


    
}