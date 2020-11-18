let corPreto = document.getElementsByClassName('color')[0]; corPreto.style.background = 'black';
let corVermelho = document.getElementsByClassName('color')[1];corVermelho.style.background = 'red';
let corAzul = document.getElementsByClassName('color')[2]; corAzul.style.background = 'blue';
let corVerde = document.getElementsByClassName('color')[3]; corVerde.style.background = 'green';

window.onload = function(){
    corPreto.classList.add('selected');
}

let tbl = document.getElementById('pixel-board');
function criandoElemento(){
    for(let index = 0;index < 5; index++){
        let col = document.createElement('tr');
        tbl.appendChild(col);
       for(let i = 0; i < 5; i++){
            let linha = document.createElement('td');
            linha.classList.add('pixel');
            linha.style.backgroundColor='white';
            col.appendChild(linha);
        }
    }
}
criandoElemento();

let elementos = document.getElementsByClassName('color');
for(let contador = 0; contador < elementos.length; contador+=1){
    elementos[contador].onclick = function(){
        let removeElementos = elementos[0];
        while(removeElementos){
            if(removeElementos.tagName === 'DIV'){
                removeElementos.classList.remove('selected');
            }
            removeElementos = removeElementos.nextSibling;
        }
        
        this.classList.add('selected');
    }
}

let quadrado = document.getElementsByClassName('pixel');
for(let cont = 0; cont < quadrado.length; cont+=1){
    quadrado[cont].onclick = function selecionaPixel(event) {
        let selecionaDiv = document.querySelector('.selected');
        let selecionaCor = selecionaDiv.style.background;
        event.target.style.backgroundColor = selecionaCor;

    }
}