function clearAllPixels() {
    let arrayPixels = document.getElementsByClassName('linePixel');
    for (let index = 1; index < 5; index += 1) {
        let clearPixels = arrayPixels[index];
        clearPixels.style.backgroundColor = 'white';
    }
}
    
