function pixelBoard() {
    const pixelList = document.getElementById('pixel-board');

    for (let index = 1; index <= 25; index += 1) {
        const pixelElement = document.createElement('li');

        pixelList.appendChild(pixelElement);
        pixelElement.className = "pixel"
    }
}
pixelBoard();