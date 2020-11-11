// Paleta de cores 
    function createPallete() {
    let sq = document.getElementById('color-pallete');
        for(index = 0; index < 4; index++){
            let pallete = document.createElement('div');
            pallete.className = 'color';
            sq.appendChild(pallete);
        }
    }

createPallete();

// Cores da paleta
document.querySelector('#color-pallete').children[0].style.backgroundColor = 'black';
document.querySelector('#color-pallete').children[1].style.backgroundColor = 'red';
document.querySelector('#color-pallete').children[2].style.backgroundColor = 'blue';
document.querySelector('#color-pallete').children[3].style.backgroundColor = 'yellow';




// Pixel - Board 
    function createSq() {

    let sq = document.getElementById('pixel-board');

        for (index = 0; index < 5; index++){

            let column = document.createElement('div');

            for (indexTwo = 0; indexTwo < 5; indexTwo++){

                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                column.appendChild(pixel);
            }
        sq.appendChild(column)
        }
    }

createSq();


// Variavel que armazena cor para pintar o quadro
var masterColor = 'black';

// Selecionando a cor na paleta
addEventListener('click', function (event){
    if (event.target.className === 'color'){
       masterColor = event.target.style.backgroundColor;
    }
})

// Inserindo cor no quadro 
addEventListener('click', function (event){
    if (event.target.className === 'pixel'){
        event.target.style.backgroundColor = masterColor;
    }
})