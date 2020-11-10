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
    // for(let index = 0; index < todasCores.length; index +=1){}
    addEventListener('click', function(event){
        if(event.target.className === 'color'){     
            for(let i = 0; i < todasCores.length; i++){
                todasCores[i].className = 'color';
                    
            }
            event.target.className = "color selected"
        }else{
            event.target.className = "color";
        }
       
    
    })

    /*
    if(todasCores[0].className === "color selected"){
        todasCores[1].className = 'color'
        todasCores[2].className = 'color'
        todasCores[3].className = 'color'
    }else if(todasCores[1].className === 'color selected'){
        todasCores[0].className = 'color'
        todasCores[2].className = 'color'
        todasCores[3].className = 'color'
    }else if(todasCores[2].className === 'color selected'){
        todasCores[0].className = 'color'
        todasCores[1].className = 'color'
        todasCores[3].className = 'color'
    }else if(todasCores[3].className === 'color selected'){
        todasCores[0].className = 'color'
        todasCores[1].className = 'color'
        todasCores[2].className = 'color'
    }

    /*
    function selected(){
        const paleta = document.querySelector('#color-pallete')
        const cor1 = document.querySelectorAll('.color')[0];
        
        paleta.addEventListener('click', function(event){
            const divSelected = document.querySelector('.selected')
            if(divSelected === null){
                event.target.className = "color selected";
            }else{
                event.target.className = "color";
            }
        }) 

            
    }
    selected();*/





}   
