function clearAllPixels() {
    const arrayPixels = document.getElementById('pixel-board');
    arrayPixels.addEventListener('click', () => {
        const getPixels = document.getElementsByClassName('pixel');
        for (const pixel of getPixels) {
            pixel.getElementsByClassName.backgroundColor = 'white';
        }
    });
}

    
