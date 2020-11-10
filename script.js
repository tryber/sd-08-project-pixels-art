
//Requisito 06
//Função que adiciona a classe selected na cor inicial 'preta'
//Raciocinio encontrado em uma discussão no StackoverFlow (https://pt.stackoverflow.com/questions/225809/como-adicionar-uma-classe-em-javascript-puro)
function addSelect() {
    document.querySelector('#color1').classList.add("selected");
}
addSelect();

//Requisito 07
function classSelected() {
    //Recuperando cores no html
    let classColors = document.querySelectorAll('.color');
    //Percorrendo cada cor, e adicionando o evento de click
    for (let index = 0; index < classColors.length; index += 1) {
        let tagClass = classColors[index];

        tagClass.addEventListener('click', function (event) {
            for (let i = 0; i < classColors.length; i += 1) {
                if (classColors[i].classList.contains('selected')) {
                    classColors[i].classList.remove('selected')
                }
            }
            event.target.classList.add('selected');
        });
    }
}
classSelected();



