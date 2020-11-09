window.onload = carregaPixels;

function carregaPixels(){
    let table = document.querySelector('#tabela');
    let count = 1;
    for(let col = 1; col <= 5; col++){

        let line = document.createElement('tr');
        //box.className = 'pixel';
        line.setAttribute("id", "line"+col)
        table.appendChild(line);
        let coluna = document.querySelector('#line'+col);

        for(let li = 0; li < 5; li++){
        let box = document.createElement('td');
        box.className = 'pixel';
        box.setAttribute("id", "box"+count);
        count++;
        coluna.appendChild(box);
        }
    }
    let pintar;

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
}


