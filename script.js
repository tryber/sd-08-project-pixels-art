window.onload = funcaoInicial;

function funcaoInicial() {
    let pixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = 'white';
    }
}