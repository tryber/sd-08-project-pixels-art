function clearAllPixels() {
    let arrayPixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < 25; index += 1) {
        let clearPixels = arrayPixels[index];
        clearPixels.style.backgroundColor = 'white';
    }
}
    
