
const blue = document.querySelector('#azul');
const purple = document.querySelector('#roxo');
const green = document.querySelector('#verde');


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


/*Pintando os Pixels*/


function painted () {
    const squares = document.querySelectorAll('.pixel').forEach(function(evt){
evt.addEventListener('click', function(event){
    let paint = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = paint;

});
    });
}
painted();

/*Botao Limpar*/
const clearAll = document.getElementById('clear-board');
const pixel = document.querySelectorAll('.pixel');

clearAll.addEventListener('click', allWhite)
    function allWhite () {
        for (let index = 0; index < pixel.length; index +=1) {
            pixel[index].style.backgroundColor = 'white';
        }
        
    }
    


    


  