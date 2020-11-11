window.onload = iniciaPreto;

function iniciaPreto() {
    let preto = document.getElementsByClassName('color')[0];
    preto.classList.add('selected');
}



function selector (event) {
    let seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected');
}

const palette = document.getElementById('color-palette');
palette.addEventListener('click', selector);

clearButton = document.getElementById("clear-board");
let pixels = document.querySelectorAll('.pixel');

clearButton.addEventListener("click", function () {
    for (index = 0; index < pixels.length; index++) {
        pixels[index].style.backgroundColor = "white";
    }
});
