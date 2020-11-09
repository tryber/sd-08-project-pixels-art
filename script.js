let pixelBoard = document.getElementById('pixel-board')

for(let index = 0; index < 25; index +=1){
    let pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';

    pixelBoard.appendChild(pixelDiv)
}