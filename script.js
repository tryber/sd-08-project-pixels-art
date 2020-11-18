let getColor = document.getElementsByClassName('color');

function firstColor(){
    getColor[0].classList.add('selected');
}
firstColor();

function changeColor(event){
    event.target.className += ' selected';
}

function clearAllPixels() {
    const arrayPixels = document.getElementById('clear-board');
    arrayPixels.addEventListener('click', () => {
        const getPixels = document.getElementsByClassName('pixel');
        for (const pixel of getPixels) {
            pixel.getElementsByClassName.backgroundColor = 'white';
        }
    });
}    
