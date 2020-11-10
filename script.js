//Paleta de cores
let colorList = ['black', 'purple', 'gold', 'navy'];
let colorPalette = document.getElementById('color-palette')

for (let i = 0; i < colorList.length; i += 1){
    let div = document.createElement('div')
    div.className = 'color';
    div.style.backgroundColor = colorList[i];
    colorPalette.appendChild(div);
}
