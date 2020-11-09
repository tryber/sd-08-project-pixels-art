let pixel_board = document.querySelector('#pixel-board');

for (let index = 1; index <= 5; index++) {
    for (let index = 1; index <= 5; index++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';

        pixel_board.appendChild(pixel);
    }
}