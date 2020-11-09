function palettaColor () {
    document.querySelectorAll('.color')[0].style.background = 'black';
    document.querySelectorAll('.color')[1].style.background = 'red';
    document.querySelectorAll('.color')[2].style.background = 'green';
    document.querySelectorAll('.color')[3].style.background = 'blue';
}
palettaColor();

function createPixels () {    
    let divlPixelBoard = document.querySelectorAll('#line');
    for (let i = 0; i < divlPixelBoard.length; i +=1) {
        for (let j = 0; j < divlPixelBoard.length; j +=1){
            let divPixel = document.createElement('div');
            divPixel.className = 'pixel';
            divlPixelBoard[i].appendChild(divPixel);
        }
    }
}
createPixels();

window.onload = function () {
    document.querySelectorAll('.color')[0].classList.add('selected');
    document.querySelectorAll('.color')[1].classList.remove('selected');
    document.querySelectorAll('.color')[2].classList.remove('selected');
    document.querySelectorAll('.color')[3].classList.remove('selected');   
}

document.querySelectorAll('.color')[0].addEventListener('click', function eventColorClick1 () {    
    for (let i = 0; i < document.querySelectorAll('.color').length; i+=1) {
        if (i !== 0) {
            document.querySelectorAll('.color')[i].classList.remove('selected');
        }
        if (document.querySelectorAll('.color')[0].classList.contains('selected')) {
        } else {
            document.querySelectorAll('.color')[0].classList.add('selected');
        }            
    }    
});

document.querySelectorAll('.color')[1].addEventListener('click', function eventColorClick2 () {    
    for (let i = 0; i < document.querySelectorAll('.color').length; i+=1) {
        if (i !== 1) {
            document.querySelectorAll('.color')[i].classList.remove('selected');
        }
        if (document.querySelectorAll('.color')[1].classList.contains('selected')) {
        } else {
            document.querySelectorAll('.color')[1].classList.add('selected');
        }            
    }    
});

document.querySelectorAll('.color')[2].addEventListener('click', function eventColorClick3 () {    
    for (let i = 0; i < document.querySelectorAll('.color').length; i+=1) {
        if (i !== 2) {
            document.querySelectorAll('.color')[i].classList.remove('selected');
        }
        if (document.querySelectorAll('.color')[2].classList.contains('selected')) {
        } else {
            document.querySelectorAll('.color')[2].classList.add('selected');
        }            
    }    
});

document.querySelectorAll('.color')[3].addEventListener('click', function eventColorClick4 () {    
    for (let i = 0; i < document.querySelectorAll('.color').length; i+=1) {
        if (i !== 3) {
            document.querySelectorAll('.color')[i].classList.remove('selected');
        }
        if (document.querySelectorAll('.color')[3].classList.contains('selected')) {
        } else {
            document.querySelectorAll('.color')[3].classList.add('selected');
        }            
    }    
});

function changeColorPixel (event) {
    event.target.style.background = document.querySelector('.selected').style.background;
}
document.querySelector('#pixel-board').addEventListener('click', changeColorPixel);

document.querySelector('#clear-board').addEventListener('click', function clearPixel() {
    for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
        document.querySelectorAll('.pixel')[i].style.background = '';
    }
});
   