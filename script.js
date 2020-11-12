window.onload = function () {
    let black = document.querySelector('.color');
    black.classList = 'color selected';
}

function color() {
    let colors = ['black','blue','yellow','green'];
    for (let i = 1; i < 4; i += 1) {
        let randomNumber = Math.random()*255;
        let randomNumber2 = Math.random()*255;
        let randomNumber3 = Math.random()*255;
        colors[i] = 'rgb(' + randomNumber + ',' + randomNumber2 + ',' + randomNumber3 + ')';
    }
    for (let i in colors) {
        let spot = document.createElement('li');
        spot.classList = 'color';
        spot.style.backgroundColor = colors[i];
        document.querySelector('#color-palette').appendChild(spot);
        selecting(spot);
    }
}

color();

function createTable() {
    for (let i = 0; i < 5; i += 1) {
        let spot = document.createElement('div');
        document.querySelector('#pixel-board').appendChild(spot);
        spot.style.margin = 0;
        for (let i = 0; i < 5; i += 1) {
            let spot = document.createElement('div');
            spot.classList = 'pixel';
            spot.style.backgroundColor = 'white';
            document.querySelector('#pixel-board').appendChild(spot);
            colorChange(spot);
            clear(spot);
        }
    }
}

createTable();

function selecting(element) {
    element.addEventListener('click', function(event) {
        let selected = document.querySelector('.selected');
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

function clear(element) {
    let button = document.querySelector('#clear-board');
    button.addEventListener('click', function() {
        element.style.backgroundColor = 'white';
    })
}

function generateBoard() {
    let input = document.querySelector('#board-size');
    let button = document.querySelector('#generate-board');
    button.addEventListener('click', function() {
        if (input.value === ''){
            alert('Board inválido!')
        } else {
            if (input.value > 50) {
                input.value = 50;
            } else if (input.value < 5) {
                input.value = 5;
            }
            let board = document.querySelector('#pixel-board');
            board.innerHTML = '';
            for (let i = 0; i < input.value; i += 1) {
                let spot = document.createElement('div');
                board.appendChild(spot);
                spot.style.margin = 0;
                for (let i = 0; i < input.value; i += 1) {
                    let spot = document.createElement('div');
                    spot.classList = 'pixel';
                    spot.style.backgroundColor = 'white';
                    board.appendChild(spot);
                    colorChange(spot);
                    clear(spot);
                }
            }
        }   
    })
}

generateBoard();