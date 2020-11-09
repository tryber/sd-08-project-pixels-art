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


        }

    }
    createDiv(5);

    const colorBlack = document.getElementById('color1')

    colorBlack.classList.add('selected')





}