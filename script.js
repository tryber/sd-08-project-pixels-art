window.onload = function () {
    let pixel_board = document.querySelector('#pixel-board');
    let black = document.querySelector(".black");
    black.className += ' selected';

    let red = document.querySelector(".red");
    let green = document.querySelector(".green");
    let yellow = document.querySelector(".yellow");

    for (let index = 1; index <= 5; index++) {
        for (let index = 1; index <= 5; index++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';

            pixel_board.appendChild(pixel);
        }
    }

    black.addEventListener('click', selectColor);
    red.addEventListener('click', selectColor);
    green.addEventListener('click', selectColor);
    yellow.addEventListener('click', selectColor);
}

function selectColor(event) {
    let currentSelected = document.querySelector('.selected');
    currentSelected.className = currentSelected.className.replace(" selected", "");

    event.target.className += ' selected';
}