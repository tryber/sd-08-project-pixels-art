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

    let pixelArray = document.querySelectorAll('.pixel');

    for (pixel of pixelArray) {
        pixel.addEventListener('click', paintPixel);
    }
}

function selectColor(event) {
    let currentSelected = document.querySelector('.selected');
    currentSelected.className = currentSelected.className.replace(" selected", "");

    event.target.className += ' selected';
}

function paintPixel(event) {
    let color = document.querySelector('.selected').className.split(' ')[1];
    // event.target.className = event.target.className.replace(event.target.className.split(' ')[1], '');
    if (event.target.className.split(' ')[1] == null) {
        event.target.className += ' ' + color;
}
    else {
        event.target.className = event.target.className.replace(event.target.className.split(' ')[1], color);
    }

}