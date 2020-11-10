window.onload = function(){

    function createDiv(number){
        for(let i = 0; i < (number*number); i+=1){
            const pixelQuadro = document.querySelector('#pixel-board');
            const input = ''
            const divCaixas = document.createElement('div');
            divCaixas.className ="pixel";
            divCaixas.innerHTML = input;
            pixelQuadro.appendChild(divCaixas);
            divCaixas.style.backgroundColor = 'white';
            pixelQuadro.style.width = number * 40 + 'px';
            pixelQuadro.style.height = number * 40 + 'px';
            
        }

    }
    createDiv(5);

   
    const colorBlack = document.getElementById('color1')
    
    colorBlack.classList.add('selected')

    const paleta = document.querySelector('#color-palette')

    const todasCores = document.querySelectorAll('.color'); 

    paleta.addEventListener('click', function(event){
        if(event.target.className === 'color'){     
            for(let i = 0; i < todasCores.length; i++){
                todasCores[i].className = 'color';
                    
            }
            event.target.className = "color selected"
        }/*else{
            event.target.className = "color";
        }*/
        
    });
    


    const divs = document.getElementsByClassName('pixel')
    const board = document.querySelector('#pixel-board');

    for(let key of divs){
        key.addEventListener('click', (selected) =>{
            let selectedColor = document.querySelector('.selected');
            selectedColor = window.getComputedStyle(selectedColor, null);
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
            selected.target.style.backgroundColor = selectedColor.backgroundColor;
            
        })
    }

    let botao = document.querySelector('#clear-board')

    botao.addEventListener('click', function limpar(){
        for(let index = 0; index < divs.length; index +=1){
            divs[index].style.backgroundColor = '#fff'
        }
    });
}   
