// Paleta de cores 
    function createpalette() {
    let square = document.getElementById('color-palette');
        for(index = 0; index < 4; index++){
            let palette = document.createElement('div');
            palette.className = 'color';
            square.appendChild(palette);
        }
    }

createpalette();

// Cores da paleta
document.querySelector('#color-palette').children[0].style.backgroundColor = '#000';
document.querySelector('#color-palette').children[1].style.backgroundColor = '#255';
document.querySelector('#color-palette').children[2].style.backgroundColor = '#64f';
document.querySelector('#color-palette').children[3].style.backgroundColor = '#0ff';




// Pixel - Board 
    function createSquare() {

    let square = document.getElementById('pixel-board');

        for (index = 0; index < 5; index++){

            let column = document.createElement('div');

            for (indexTwo = 0; indexTwo < 5; indexTwo++){

                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                column.appendChild(pixel);
            }
        square.appendChild(column)
        }
    }

createSquare();


// Variavel que armazena cor para pintar o quadro
var masterColor = '#000';


// Selected começando no Black

document.querySelector('#color-palette').children[0].classList.toggle('selected');

// Selecionando a cor na paleta
addEventListener('click', function (event){
    if (event.target.className === 'color'){
       masterColor = event.target.style.backgroundColor;
       event.target.classList.toggle('selected');
    } else if (event.target.className === 'color selected'){
        event.target.className = 'color';
    }
})




// Inserindo cor no quadro 
addEventListener('click', function (event){
    if (event.target.className === 'pixel'){
        event.target.style.backgroundColor = masterColor;
    }
})

// limpar quadro 
document.getElementById('clear-board').addEventListener('click', function () {
    window.history.go(0)
})