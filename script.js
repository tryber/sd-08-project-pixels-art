//Variáveis
const boxPalette = document.getElementsByClassName('color'); //elementos com class='color'
const colors = ["black", "red", "orange", "yellow"]; // array de cores

//roda as funções quando a página é carregada
window.onload = criateColorsPalette(boxPalette,colors), firstSelectedColor(boxPalette);

//Preenche as cores do palette
function criateColorsPalette(boxPalette,colors) {    
    for (key in colors) {
        boxPalette[key].style.backgroundColor = colors[key];
    }
}

//seleciona cor black
function firstSelectedColor(boxPalette) {
    boxPalette[0].className = 'color selected'
}

//pega a cor selecionada do palette
let palette = document.getElementById('color-palette');

palette.addEventListener('click', function click(event) {
    let selected = document.getElementsByClassName('selected'); // cor selecionada
    selected[0].className = 'color';
    
    selectColor = event.target;
    selectColor.className = 'color selected';
})



