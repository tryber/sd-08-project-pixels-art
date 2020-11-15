function criaPixelBoard(number) {
    for (let linha = 0; linha < number; linha +=1) {
        for (let col = 0; col < number; col += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            let board = document.querySelector('#pixel-board');
            board.appendChild(pixel);
            
        }
    }
};

criaPixelBoard(5);