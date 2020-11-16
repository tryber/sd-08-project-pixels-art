const quadroDePixel = document.getElementById('pixel-board');


function popolaQuadroDePixels(){
    for(let indiceArrayA = 0; indiceArrayA < 5; indiceArrayA += 1){
        let criaPixel = document.createElement('div');
        quadroDePixel.appendChild(criaPixel);
    
        for(let indiceArrayB = 0;indiceArrayB < 5; indiceArrayB += 1){
            let criaPixel = document.createElement('div');
            quadroDePixel.appendChild(criaPixel);
            criaPixel.className = 'pixel';
        }
    }
}
 let cor = document.getElementsByClassName('color');
 popolaQuadroDePixels();
