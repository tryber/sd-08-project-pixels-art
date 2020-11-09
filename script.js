function title(){
    let tituloh1 = document.querySelector("h1");
    tituloh1.id = 'title';
    tituloh1.innerHTML = 'Paleta de Cores';

}

    title();

let cor = ['black', 'purple', 'red', 'green'];

function cores(){
    let lista = document.querySelectorAll('.color');

    lista[0].classList.add("selected");

    for (let index = 0; index < lista.length; index +=1){
        lista[index].style.backgroundColor = cor[index];

        lista[index].addEventListener('click', function(event){
            
            let removerClass = document.querySelectorAll('.selected');
            for( let index = 0; index < removerClass.length; index +=1 ){
                removerClass[index].classList.remove("selected");
            }

         event.target.classList.add("selected");
        })
    
    }

}
    cores();


let board = 5;
let largura = board;
let altura = board;

let linhas = document.getElementsByClassName('line');

function quadro(){
    for (let index = 0; index < linhas.length; index += 1) {
      for (let indice = 0; indice < largura; indice +=1 ){
        let div = document.createElement('div');
        linhas[index].appendChild(div);
        div.className = "pixel";
      } 
        
    }
}
    quadro();

function pixelColors(){
        let pixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixels.length; i += 1){
        let quadrado = pixels[i];

        quadrado.addEventListener('click', function(e){
            let paleta = document.querySelector('.selected');
            quadrado.style.backgroundColor = paleta.style.backgroundColor;
        })
    }
}

pixelColors();

    
        