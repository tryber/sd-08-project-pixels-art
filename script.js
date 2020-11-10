window.onload = function(event){
    

    
    let pintar;
    let num = 5;
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
    
    let pintarVermelho = document.getElementById("red")
    pintarVermelho.addEventListener("click", function(){ 
        pintar = "red";
        removeClass();
        pintarVermelho.className += " selected";
    })

    let pintarAzul = document.getElementById("blue")
    pintarAzul.addEventListener("click", function(){ 
        pintar = "blue";
        removeClass();
        pintarAzul.className += " selected";
    })

    let pintarAmarelo = document.getElementById("yellow")
    pintarAmarelo.addEventListener("click", function(){ 
        pintar = "yellow";
        removeClass();
        pintarAmarelo.className += " selected";
    })

    pintarPreto.className += " selected";
    pintar = "black";

     let box = document.getElementsByClassName('pixel');
     Array.from(box).forEach(function(box){
         box.addEventListener("click", function(){
            box.style.backgroundColor = pintar;
        })
    })

    
    
}
    function removeClass(){

        pintarPreto.classList.remove("selected");
        pintarVermelho.classList.remove("selected");
        pintarAzul.classList.remove("selected");
        pintarAmarelo.classList.remove("selected");
    }

    function clear(){
        let box = document.getElementsByClassName('pixel');
         Array.from(box).forEach(function(box){
                box.style.backgroundColor = "white";
        })
    }

    function generateBoard(){

        
        let num = boardSize();
        if(num == ""){ num =5}else{clearBoard();}
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
}

    function boardSize(){

        let size = document.getElementById("board-size").value;
        return size;
}

    function generatorClick(){

        if(boardSize() == ""){
            alert("Board inválido!");
        }else{
            let generator = document.getElementById("generate-board");
        generator.addEventListener("click", generateBoard);
        }
        
    }

    function clearBoard(){

        let table = document.querySelector('#tabela');
        let rowCount = table.rows.length;
        for(let i = rowCount;i > 0; i--){
            table.deleteRow(i-1)
        }
        
    }


