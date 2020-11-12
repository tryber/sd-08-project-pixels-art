function firstBlack(){
    let element = document.getElementById('black')
    element.className = 'color selected'
}
firstBlack()

function selecionaCor(){
    let elemento = document.getElementsByClassName('color')
    for (i = 0; i < elemento.length; i += 1){
        let corSelecionada = elemento[i]
        corSelecionada.addEventListener('click', function(){
            let elemento2 = document.querySelector('.selected')
            if(corSelecionada.className === 'color'){
                corSelecionada.className = 'color selected'
                elemento2.className = 'color'
            }
        })
    }
}
selecionaCor()

function colorindoPixels(){
    let pixel = document.querySelectorAll('.pixel')
    for(i = 0; i < pixel.length; i += 1){
        let pick = pixel[i]
        pick.addEventListener('click', function(event){
            let selected = document.querySelector('.selected').id
            /*if(pick.style.backgroundColor !== null)
            pick.style.backgroundColor = selected*/
            event.target.style.backgroundColor = selected
        })
    }   
}
colorindoPixels()

function createButton(){
    let button = document.createElement('button')
    let divPai = document.getElementById('but')
    button.id = 'clear-board'
    button.innerHTML = 'Limpar'
    divPai.appendChild(button)
    button.addEventListener('click',function(){
        let pixel = document.querySelectorAll('.pixel')
        for(i = 0; i < pixel.length; i += 1){
            let pick = pixel[i]
            if(pick.style.backgroundColor !== null){
                pick.style.backgroundColor = 'white'
            }
        }
    })
}
createButton()

let generateBoard = document.getElementById('generate-board');
let pixelBoard = document.getElementById('pixel-board');

    generateBoard.addEventListener('click',function(){ 
        let value = document.getElementById('board-size').value;
        if(value === ''){
            alert('Board inválido!')
        }else if(value <= 0){
            alert('Escolha um número maior que 0.')
        }
        else{
            let itens = document.getElementById('pixel-board');
        while (itens.hasChildNodes()) {  
            itens.removeChild(itens.firstChild);
          };
          if(value >= 1 && value <= 4){
            value = 5
        }else if(value > 50){
            value = 50
        };
            for(let i = 0; i < value; i += 1){
                let createTR = document.createElement('tr');
                pixelBoard.appendChild(createTR);
            };
            let trLength = document.querySelectorAll('tr');
            for(let j = 0; j < trLength.length; j += 1){
                for(let k = 0; k < value; k += 1){
                    let createTD = document.createElement('td');
                    createTD.className = 'pixel';
                    trLength[j].appendChild(createTD);
                };
            };
            colorindoPixels();
        }
    });

    