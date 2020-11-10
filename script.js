//requisito 2 - criando as 4 divs 'color'
const captureDivColorPalette = document.getElementById('color-palette')
for (let index = 0; index <= 3; index += 1) {
    let colorClass = document.createElement('div');
    colorClass.className = 'color';
    captureDivColorPalette.appendChild(colorClass);
}

//requisito 2 - função responsável por colorir
function toColorDiv (color) {
    const captureDivColor = document.getElementsByClassName('color');
    //laço responsável por distribuir as cores do array recebido e a 'div - color' criada na primeira parte do requisito 2
    for (let index = 0; index < captureDivColor.length; index += 1) {
        let toColor = captureDivColor[index]
        toColor.style.backgroundColor = color[index];
    }
}
toColorDiv(['black', 'green', 'blue', 'orange']);

    












