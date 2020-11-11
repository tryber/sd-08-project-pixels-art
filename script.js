function creatColorPalette() {
    const colors = ['black', 'red', 'green', 'blue'];
    const colorPaletteList = document.getElementById("color-palette-list");
    
    for (let index = 0; index < colors.length; index += 1) {
        const color = document.createElement('li');
        color.className = 'color';
        color.style.display = 'inline-block';
        color.style.width = '40px';
        color.style.height = '40px';
        color.style.border = 'solid 1px #000';
        color.style.background = colors[index];
        
        colorPaletteList.appendChild(color);
    }
    
}creatColorPalette();

function creatPixelBoard() {
    const pixelBoardSize = 5;
    const pixelBoard = document.getElementById('pixel-board');
    console.log(pixelBoard);
    for (let index = 0; index < pixelBoardSize; index += 1) {
        const lineList = document.createElement('ul');
        lineList.style.fontSize = '0';
        pixelBoard.appendChild(lineList);
        for (let indexItem = 0; indexItem < pixelBoardSize; indexItem += 1) {
            const pixel = document.createElement('li');
            pixel.className = 'pixel';
            pixel.style.width = '40px';
            pixel.style.height = '40px';
            pixel.style.border = 'solid 1px #000';
            pixel.style.display = 'inline-block';
            pixel.style.background = '#fff';
            lineList.appendChild(pixel);
        }
    }
}creatPixelBoard();
