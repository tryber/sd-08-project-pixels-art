const pixel = document.querySelector('#pixel-board');
for (let col = 0; col < 5; col +=1) {
    for(let line = 0; line < 5; line +=1) {
        let pix = document.createElement('div');
        pix.className = 'pixel';
        pixel.appendChild(pix)
    }
}