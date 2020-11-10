window.onload = function(event){
    
    let start = true;
    let pintar;
    generateBoard();
    generatorClick();

    let botao = document.getElementById("clear-board");
    botao.addEventListener("click", clear);

    let pintarPreto = document.getElementById("black")
    pintarPreto.addEventListener("click", function(){ 
        pintar = "black";
        removeClass();
        pintarPreto.className += " selected";
    })
    
    let pintarA = document.getElementById("colorA");
    let corA = getRandomColor();
    pintarA.style.backgroundColor = corA; 
    pintarA.addEventListener("click", function(){ 
        pintar = corA;
        removeClass();
        pintarA.className += " selected";
    })

    let pintarB = document.getElementById("colorB");
    let corB = getRandomColor();
    pintarB.style.backgroundColor = corB;
    pintarB.addEventListener("click", function(){ 
        pintar = corB;
        removeClass();
        pintarB.className += " selected";
    })

    let pintarC = document.getElementById("colorC");
    let corC = getRandomColor();
    pintarC.style.backgroundColor = corC;
    pintarC.addEventListener("click", function(){ 
        pintar = corC;
        removeClass();
        pintarC.className += " selected";
    })

    pintar = "black";
    pintarPreto.className += " selected";

    //Evento do click do pixel no quadro
    function pintaBox(){

        let box = document.getElementsByClassName('pixel');
        Array.from(box).forEach(function(box){
            box.addEventListener("click", function(){
            box.style.backgroundColor = pintar;
           })
       })
    }
    //Tira a classe "selected" da paleta de cores
    function removeClass(){

        pintarPreto.classList.remove("selected");
        pintarA.classList.remove("selected");
        pintarB.classList.remove("selected");
        pintarC.classList.remove("selected");
    }
    //Limpa o quadro de pixels
    function clear(){
        let box = document.getElementsByClassName('pixel');
         Array.from(box).forEach(function(box){
                box.style.backgroundColor = "white";
        })
    }
    //Gera um quadro de pixels
    function generateBoard(){

        let num;
        if(start == false){
            num = boardSize();
            if(num == ""){ 
                alert("Board inválido!");
                return;
            }else{
                if(num < 5){
                    num = 5;
                }else if(num > 50){
                    num = 50;
                }
                clearBoard();
            }
        }else{
            start = false;
            num = 5;
        }

        let table = document.querySelector('#tabela');
        let count = 1;
        for(let col = 1; col <= num; col++){

            let line = document.createElement('tr');
            line.setAttribute("id", "line"+col)
            table.appendChild(line);
            let coluna = document.querySelector('#line'+col);

            for(let li = 0; li < num; li++){
            let box = document.createElement('td');
            box.className = 'pixel';
            box.setAttribute("id", "box"+count);
            count++;
            coluna.appendChild(box);
            }
        }
        pintaBox();
    }
    //Retorna o valor do input "board-size"
    function boardSize(){

        let size = document.getElementById("board-size").value;
        return size;
    }
    //Evento botao "VQV"
    function generatorClick(){
 
        let generator = document.getElementById("generate-board");
        generator.addEventListener("click", generateBoard);   
    }
    //Apaga o quadro de pixels
    function clearBoard(){

        let table = document.querySelector('#tabela');
        let rowCount = table.rows.length;
        for(let i = rowCount;i > 0; i--){
            table.deleteRow(i-1)
        }
        
    }
    //Retorna uma cor aleatoria em hexadecimal
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
    

 


