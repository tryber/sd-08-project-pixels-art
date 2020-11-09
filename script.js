
//Requisito 06
//Função que adiciona a classe selected na cor inicial 'preta'
//Raciocinio encontrado em uma discussão no StackoverFlow (https://pt.stackoverflow.com/questions/225809/como-adicionar-uma-classe-em-javascript-puro)
function addSelect (){
    document.querySelector('#color1').classList.add("selected");
}
addSelect();

//Requisito 07
//Recuperando cores no html
let classColors = document.querySelectorAll('.color');
//Percorrendo cada cor, e adicionando o evento de click
for (let index = 0; index < classColors.length; index +=1){
    classColors[index].addEventListener('click', function(){
        //classColors[index].classList.add("selected");
        let element = classColors[index];
        let tagClass = element.getAttribute('class');
        if (tagClass == 'color'){
            element.setAttribute('class', 'color selected')
           
        }  
        if (tagClass === 'color selected'){
            element.setAttribute('class', 'color')
        }
       
    });
}

//classColors[index].classList.add("selected");