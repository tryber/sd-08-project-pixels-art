const pixel = document.querySelector('#pixel-board');
for (let col = 0; col < 5; col += 1) {
    for (let line = 0; line < 5; line += 1) {
        const pix = document.createElement('div');
        pix.className = 'pixel';
        pixel.appendChild(pix);
    }
}
window.onload = function(){  //seleciona a cor black assim ue carrega a pagina
    document.getElementById('black').classList.add('selected');
}


function limpar(){
    document.getElementById('pixel-board').style.backgroundColor = 'white';
}
