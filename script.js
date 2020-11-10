
const blue = document.querySelector('#azul');
const purple = document.querySelector('#roxo');
const green = document.querySelector('#verde');
const squares = document.querySelectorAll('.pixel');

const colors = document.querySelectorAll('.color');
const blackSelected = document.querySelector('#preto');
blackSelected.classList.add('selected');

for (let index = 0; index < colors.length; index +=1){
    let colorSelected = colors[index];
    colorSelected.addEventListener('click', function(event){
        for (let index2 = 0; index2 < colors.length; index2 +=1){
        let selected = colors[index2];
        if (selected.classList.contains('selected')) {
            selected.classList.remove('selected');
        }
        }
        event.target.classList.add('selected');
    });         
}

