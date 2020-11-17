function createPixelBoard() {
    
}

function clearAllPixels() {
    let arrayPixels = document.getElementsByClassName('pixel');
    let clearPixels = [];
    for (let index = 0; index < 25; index += 1) {
        clearPixels.push(arrayPixels[index]);
        clearPixels.style.backgroundColor = 'white';
    }
}

    
