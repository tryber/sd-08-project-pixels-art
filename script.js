//Paleta de cores
const colorList = ['black', 'purple', 'gold', 'navy'];
const colorPalette = document.getElementById('color-palette');

for (let i = 0; i < colorList.length; i += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = colorList[i];
    colorPalette.appendChild(div);
}
