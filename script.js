//Variáveis
const boxPalette = document.getElementsByClassName('color'); //elementos com class='color'
const colors = ["black", "red", "orange", "yellow"]; // array de cores
const palette = document.getElementById('color-palette'); // seleciona o palette
const table = document.getElementById('pixel-board'); // seleciona a table
const clear = document.getElementById('clear-board'); // botão limpar

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
palette.addEventListener('click', function clickPalette(event) {
    let selected = document.getElementsByClassName('selected'); // cor selecionada
    selected[0].className = 'color';

    selectColor = event.target;
    selectColor.className = 'color selected';
})

//Pinta os boxes da table
table.addEventListener('click', function clickTable(event) {
    let selected = document.getElementsByClassName('selected'); // cor selecionada
    if (event.target.className == 'pixel') {
        event.target.style.backgroundColor = selected[0].style.backgroundColor;
        event.target.className = 'pixel'
    }
})

//limpa os boxes da table
clear.addEventListener('click', function() {
    let boxes = document.getElementsByClassName('pixel');
    
    for (index = 0; index < boxes.length; index +=1) {
        boxes[index].style.backgroundColor = 'white';
    }
})

