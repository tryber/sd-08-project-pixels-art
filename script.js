function pixelBoard(){
    const pixels = 25
    const pixelList = document.getElementById('pixel-board');

    for (let index = 1; index < pixels; index += 1) {
        const pixelElement = document.createElement('li');

        pixelList.appendChild(pixelElement);
        pixelElement.className('pixel')
    }
}
pixelBoard();