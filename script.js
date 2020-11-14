


function selectBlue(event) {
    let black = document.getElementById('black');
    let green = document.getElementById('green');
    let red = document.getElementById('red');

    black.classList.remove('selected');
    green.classList.remove('selected');
    red.classList.remove('selected');
    event.target.classList.add('selected');  
}

function selectGreen (event) {
    let black = document.getElementById('black');
    let blue = document.getElementById('blue');
    let red = document.getElementById('red');

    black.classList.remove('selected');
    blue.classList.remove('selected');
    red.classList.remove('selected');
    event.target.classList.add('selected');  
}    

function selectRed (event) {
    let black = document.getElementById('black');
    let blue = document.getElementById('blue');
    let green = document.getElementById('green');

    black.classList.remove('selected');
    blue.classList.remove('selected');
    green.classList.remove('selected');
    event.target.classList.add('selected');

}

function selectBlack (event) {
    let blue = document.getElementById('blue');
    let green = document.getElementById('green');
    let red = document.getElementById('red');

    blue.classList.remove('selected');
    red.classList.remove('selected');
    green.classList.remove('selected');
    event.target.classList.add('selected')

}


const btnBlue = document.getElementById('blue');
btnBlue.addEventListener('click', selectBlue);

const btnGreen = document.getElementById('green');
btnGreen.addEventListener('click', selectGreen);

const btnRed = document.getElementById('red');
btnRed.addEventListener('click', selectRed)

const btnBlack = document.getElementById('black');
btnBlack.addEventListener('click', selectBlack);