function title(){
    let tituloh1 = document.querySelector("h1");
    tituloh1.id = 'title';
    tituloh1.innerHTML = 'Paleta de Cores';

}

    title();

let cor = ['black', 'purple', 'red', 'green'];

function cores(){
    let lista = document.querySelectorAll('li');

    for (let index = 0; index < lista.length; index +=1){
        lista[index].innerText =  cor[index];
    }

}
    cores();
    
