let pixel_board = document.querySelector('#pixel-board');
let black = document.querySelector(".color .black");
let red = document.querySelector("color .red");
let green = document.querySelector("color .green");
let yellow = document.querySelector("color .yellow");

for (let index = 1; index <= 5; index++) {
    for (let index = 1; index <= 5; index++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';

        pixel_board.appendChild(pixel);
    }
}

function selectColor() {

}