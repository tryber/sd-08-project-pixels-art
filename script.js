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
        }else{
            event.target.className = "color";
        }      
    
    });
    






}   
