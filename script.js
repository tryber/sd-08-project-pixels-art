window.onload = function () {
    let selecionado = document.querySelector('.selected');
    console.log(selecionado.style.backgroundColor)
    
    function geraNumero(){
        return Math.ceil(Math.random() * 255);
    }

    let arrayCores = document.querySelectorAll('.color');
    for (let i = 1; i < arrayCores.length; i += 1) {
        arrayCores[i].style.backgroundColor = 'rgb(' + geraNumero() + ", " + geraNumero() + ", " + geraNumero() + ")";
    }
    
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

    addEventListener('click', function(event){
        let button = document.querySelector('#generate-board');
        let input = document.querySelector('#board-size');
        let lado = input.value;
        

        if (event.target == button) {
            if (lado == 0) {
                alert('Board inválido!');
            } else if (lado == document.getElementsByTagName('tr').length) {
                // faz nada
            } else {
                let pixelBoard = document.querySelector('#pixel-board');
                pixelBoard.remove(pixelBoard)

                if (lado < 5) {
                    lado = 5;
                }
                else if (lado > 50) {
                    lado = 50;
                }
                
                pixelBoard = document.createElement('table');
                let main = document.getElementsByTagName('main')
                pixelBoard.id = 'pixel-board';
                main[0].appendChild(pixelBoard);
                
                for (let i = 0; i < lado; i += 1) {
                    let linha = document.createElement('tr');
                    pixelBoard.appendChild(linha);
                    for (let j = 0; j < lado; j += 1) {
                        let pix = document.createElement('td');
                        pix.className = 'pixel';
                        pixelBoard.lastChild.appendChild(pix);
                    }
                }
 
            }
        }
    })
}