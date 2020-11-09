window.onload = function () {
    let black = document.querySelector('.color');
    black.classList = 'color selected';
}

function createTable() {
    for ( let i = 0; i < 25; i += 1) {
        let spot = document.createElement('li');
        spot.classList = 'pixel';
        spot.style.backgroundColor = 'white';
        document.querySelector('#pixel-board').appendChild(spot);
    }
}
createTable();