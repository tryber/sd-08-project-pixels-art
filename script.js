
let paletaCores = ["black", "yellow", "red", "blue"];

function cores() {
    
    let divPalete = document.getElementById("color-palette");
    for (let index = 0; index < 4; index += 1) {
        let divFilha = document.createElement("div");
        divFilha.className = "color";
        divFilha.style.backgroundColor = paletaCores[index];
        divPalete.appendChild(divFilha);
        
    }

    let preto = document.querySelectorAll(".color");
    preto[0].classList.add("selected");

    for (let index = 0; index < preto.length; index += 1) {

       
        preto[index].addEventListener("click", function(event) { 
            let remover = document.querySelectorAll(".selected");
            for (let index = 0; index < remover.length; index += 1) {
                remover[index].classList.remove("selected");
                event.target.classList.add("selected");
            }
            
        })
    }


}
cores();

// quadro de pixels com 25 pixels

function criaPixels() {
    let divBoard = document.querySelector('#pixel-board');
    for (let index = 0; index < 5; index += 1) {
 
        let divPixel = document.createElement("div");
        divBoard.appendChild(divPixel);
        
        for (let index = 0; index < 5; index += 1) {
           let divPixel = document.createElement("div");
           divPixel.className = "pixel";
           divBoard.appendChild(divPixel);
        }
    }

}
criaPixels()

// ### 6 - Ao carregar a página, a cor **preta** da paleta já deve estar selecionada para pintar os pixels.
//criar botão na cor preta que tem função de pintar o background de preto;




//##### As seguintes verificações serão feitas:

//- O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`;

//- Note que o elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.

