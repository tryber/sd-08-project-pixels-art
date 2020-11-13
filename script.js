function selector (event) {
    let seleciona = document.querySelectorAll('.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected')

}

let palette = document.getElementById('color-palette');
palette.addEventListener('click', selector)