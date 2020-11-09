window.onload = function(){
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
    
}