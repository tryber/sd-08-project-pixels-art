function selector (event) {
    let seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected');


}

const palette = document.getElementById('color-palette');
palette.addEventListener('click', selector);

function pintaPixels (event) {
    let selectedColor = document.querySelector('.color.selected').style.backgroundColor = 'black';
     
    event.target.style.backgroundColor = selectedColor;
}

let pixels = document.getElementById('pixel-board');
pixels.addEventListener('click', pintaPixels);