
// Requisito 06
// Função que adiciona a classe selected na cor inicial 'preta'
// Raciocinio encontrado em uma discussão no StackoverFlow (https://pt.stackoverflow.com/questions/225809/como-adicionar-uma-classe-em-javascript-puro)
function addSelect() {
    document.querySelector('#color1').classList.add('selected');
}
addSelect();

// Requisito 07
function classSelected() {
    // Recuperando cores no html
    const classColors = document.querySelectorAll('.color');
    // Percorrendo cada cor, e adicionando o evento de click
    for (let index = 0; index < classColors.length; index += 1) {
        let tagClass = classColors[index];

        tagClass.addEventListener('click', function (event) {
            for (let i = 0; i < classColors.length; i += 1) {
                //Remover classe selected caso ja exista
                if (classColors[i].classList.contains('selected')) {
                    classColors[i].classList.remove('selected');
                }
                event.target.classList.add('selected');
            }
        });
    }
}
classSelected();

// Requisito 08
function changeColor() {
    let classPixel = document.querySelectorAll('.pixel');

    for (let index = 0; index < classPixel.length; index += 1) {
        classPixel[index].addEventListener('click', function (event) {
            let currentAtual = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
            event.target.style.backgroundColor = currentAtual;
        });
    }
}
changeColor();

// Requisito 09
function clearPixels() {
    let recoverSection = document.querySelector('#location-button');
    let button = document.createElement('button');
    button.id = 'clear-board';
    button.innerText = 'Limpar'
    recoverSection.appendChild(button);
    let classPixel = document.querySelectorAll('.pixel');
    button.addEventListener('click', function () {
        for (let index = 0; index < classPixel.length; index += 1) {
            classPixel[index].style.backgroundColor = 'white';
        }
    });
}
clearPixels();