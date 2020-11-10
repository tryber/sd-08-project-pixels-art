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
    
    // function trocaCor(){
    //     for(let i = 0; i < divCaixas.length)
    // }

    const divs = document.querySelectorAll('.pixel')
    const board = document.querySelector('#pixel-board')
    
    
    for(let i = 0; i < divs.length; i+=1){
        const divIndividual = divs[i];
        var fundo = document.querySelector('.selected')

        board.addEventListener('click', function(event){
            event.target.style.backgroundColor = fundo.style.backgroundColor;
        })
        



    }





}   
