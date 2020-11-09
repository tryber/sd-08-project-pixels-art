function title(){
    let tituloh1 = document.querySelector("h1");
    tituloh1.id = 'title';
    tituloh1.innerHTML = 'Paleta de Cores';

}

    title();

let cor = ['black', 'purple', 'red', 'green'];

function cores(){
    let lista = document.querySelectorAll('.color');

    for (let index = 0; index < lista.length; index +=1){
        lista[index].style.backgroundColor = cor[index];

        lista[index].addEventListener('click', function(event){
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

