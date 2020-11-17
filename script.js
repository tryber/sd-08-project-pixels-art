let cores = document.querySelectorAll('.color')


let selecionarCor = document.getElementById ('color-palette')
    selecionarCor.addEventListener('click', trocaCor)

// let antigoSelected = document.querySelector('.selected')

function trocaCor(evento) {
    if (evento.target.className == 'color') {
        evento.target.className = 'color selected'
    }
}