const colors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const clear = document.getElementById('clear-board');
const btnGenerateBoard = document.querySelector('#generate-board');
const iptBoardSize = document.querySelector('#board-size');
const pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < colors.length; index += 1) {
    const item = colors[index];
    item.addEventListener('click', function(event){
        const selected = document.querySelector('.selected');
        selected.className = 'color';
        event.target.className = 'color selected'; 
    })
}

pixelBoard.addEventListener('click', function(event) {
    const selected = document.querySelector('.selected');
    let compStyles = window.getComputedStyle(selected);
    event.target.style.backgroundColor = compStyles.getPropertyValue('background-color');
})

clear.addEventListener('click', function(){
    for (let index =0; index < pixels.length; index += 1) {
        const item = pixels[index];
        item.style.backgroundColor = 'white';
    }
})

btnGenerateBoard.addEventListener('click', function(){
    if(iptBoardSize.value === '') {
        alert('Board inválido!');
    } else {
        let n = parseInt(iptBoardSize.value);
        if (n < 5) {
            n = 5;
        } else if (n >50 ) {
            n = 50;
        }
        pixelBoard.innerHTML = '';
        for (let indexLine = 0; indexLine < n; indexLine += 1) {
            const line = document.createElement('div');
            line.className = 'line';
            pixelBoard.appendChild(line);
            for (let indexColumn = 0; indexColumn < n; indexColumn += 1){
                const pixel = document.createElement('div');
                pixel.className = 'pixel';
                line.appendChild(pixel);
            }
        }
    }
})