function selector (event) {
    let seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected');


}

const palette = document.getElementById('color-palette');
palette.addEventListener('click', selector);

