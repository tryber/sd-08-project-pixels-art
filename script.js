window.onload = function () {
    let black = document.querySelector('.color');
    black.classList = 'color selected';
}

function color() {
    let colors = ['black','blue','yellow','green']
    for (let i in colors){
        let spot = document.createElement('li');
        spot.classList = 'color'
        spot.style.backgroundColor = colors[i];
        document.querySelector('#color-palette').appendChild(spot);
        selecting(spot);
    }
}

color();

function createTable() {
    for ( let i = 0; i < 25; i += 1) {
        let spot = document.createElement('li');
        spot.classList = 'pixel';
        spot.style.backgroundColor = 'white';
        document.querySelector('#pixel-board').appendChild(spot);
        colorChange(spot);
    }
}

createTable();

function selecting(element) {
    element.addEventListener('click',function(event) {
        let selected = document.querySelector('.selected')
        selected.className = 'color';
        event.target.className = 'color selected';
    })
}

function colorChange(element){
    element.addEventListener('click', function(event) {
        let selected = document.querySelector('.selected');
        event.target.style.backgroundColor = selected.style.backgroundColor;
    })
}
