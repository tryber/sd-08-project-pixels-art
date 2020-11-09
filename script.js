window.onload = function () {
    let paletaCores = document.querySelectorAll('.color');

    let corPreta = paletaCores[0];
    let corVermelha = paletaCores[1];
    let corVerde = paletaCores[2];
    let corAzul = paletaCores[3];

    corPreta.className += ' selected';
    let selecionado = document.querySelector('.selected');
    console.log(selecionado.style.backgroundColor)
    
    addEventListener('click', function(event){
        let pixelClicado = event.target;
        let cor = window.getComputedStyle(selecionado).backgroundColor;
        if (pixelClicado.className === 'pixel') {
            pixelClicado.style.backgroundColor = cor;
        }
    })

    addEventListener('click', function(event){
        if (event.target.className.split(' ')[0] == 'color') {
            let corSelecionada = event.target;
            let classe = selecionado.className.split(' ');
            selecionado.className = classe[0] + " " + classe[1]
            selecionado = corSelecionada;
            selecionado.className += ' selected'
        }
    })

    addEventListener('click', function(event){
        let button = document.querySelector('#clear-board');
        let pixelsArray = document.querySelectorAll('.pixel');
        if (event.target == button) {
            for (let pix of pixelsArray) {
                pix.style.backgroundColor = 'white';
            }
        }
    })
}