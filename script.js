let getColor = document.getElementsByClassName('color');

function firstColor(){
    getColor[0].classList.add('selected');
}
firstColor();

function changeColor(event){
    for (let indice = 0; indice < getColor.length; indice += 1){
        getColor[indice].classList.remove('selected');
        event.target.classList.add('selected');
        getColor[indice] = event.target;
    }
}

function clickChangeColor(){
    for (const colors of getColor) {
        colors.addEventListener('click', changeColor);
    }
}


function clearAllPixels() {
    let arrayPixels = document.getElementsByClassName('pixel');
    const button = document.getElementById('clear-board');
    button.addEventListener('click', function(){
        for (let indexClear = 0; indexClear < arrayPixels.length; indexClear += 1){
            arrayPixels[indexClear].style.backgroundColor = 'white';
        }
    })
}    
