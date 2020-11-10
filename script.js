window.onload = function (){

    //Pagina inicia com a cor black selecionada
    const corIni = document.querySelectorAll('.color');
    corIni[0].classList.add('selected');

    //Add listener para paleta de cores
    const paleta = document.getElementById('color-palette');
    paleta.addEventListener('click', setColor);

    //Remove seletor paleta
    function selectionRem() {
        for (let index = 0; index < corIni.length; index += 1) {
        corIni[index].className = "color";
        }
    }
    //Adiciona seletor paleta
    function setColor(event) {
        selectionRem();
        event.target.className = "color selected";
    }
}
    //Add listener para o pixel board
    const pxBoard = document.getElementById('pixel-board');
    pxBoard.addEventListener('click', paint);
    
    function paint(event) {
        let teste = document.querySelector('.color.selected').id;
        event.target.style.backgroundColor = teste;
          
    }
    //Add function para limpar o pixel board
    function clearPxBoard(){

        const limpar = document.getElementsByClassName('pixel');
        for(let index = 0; index < limpar.length; index += 1){
            if(limpar[index].style.backgroundColor !== limpar[index].style.backgroundColor.white){
                limpar[index].style.backgroundColor = 'white';
            }
        }
    }
    //cria btn Limpar
    const btnLimpar = document.querySelector('button');
    btnLimpar.id = 'clear-board';
    btnLimpar.innerText = 'Limpar';
    btnLimpar.addEventListener('click', clearPxBoard);