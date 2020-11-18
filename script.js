//Variáveis
const boxPalette = document.getElementsByClassName('color');
const colors = ['black', 'red', 'orange', 'yellow'];
const palette = document.getElementById('color-palette');
const table = document.getElementById('pixel-board');
const clear = document.getElementById('clear-board');
const generateBoard = document.getElementById('generate-board');

//Preenche as cores do palette
function criateColorsPalette(boxPalette, colors) {
  for (key in colors) {
    boxPalette[key].style.backgroundColor = colors[key];
  }
}

//seleciona cor black
function firstSelectedColor(boxPalette) {
  boxPalette[0].className = 'color selected';
}

//Popula table no onload
function populaTable() {
  for (colunas = 1; colunas <= 5; colunas += 1) {
    tr = document.createElement('tr');
    table.appendChild(tr);
  }
  let coluna = document.getElementsByTagName('tr');

  for (let linhas = 0; linhas < coluna.length; linhas += 1) {
    for (index = 1; index <= 5; index += 1) {
      td = document.createElement('td');
      coluna[linhas].appendChild(td);
      td.className = 'pixel';
    }
  }
}

//cria as boxes da table com o tamanho setado
generateBoard.addEventListener('click', function () {
  table.innerHTML = '';

  let size = document.getElementById('board-size').value;
  let tr = '';
  let td = '';

  if (size === '') {
    alert('Board inválido!');
  } else if (size > 50) {
    size = 50;
  } else if (size < 5) {
    size = 5;
  }

  for (colunas = 1; colunas <= size; colunas += 1) {
    tr = document.createElement('tr');
    table.appendChild(tr);
  }
  let coluna = document.getElementsByTagName('tr');

  for (let linhas = 0; linhas < coluna.length; linhas += 1) {
    for (index = 1; index <= size; index += 1) {
      td = document.createElement('td');
      coluna[linhas].appendChild(td);
      td.className = 'pixel';
    }
  }

  document.getElementById('board-size').value = '';
});

//pega a cor selecionada do palette
palette.addEventListener('click', function clickPalette(event) {
  let selected = document.getElementsByClassName('selected');
  selected[0].className = 'color';

  selectColor = event.target;
  selectColor.className = 'color selected';
});

//Pinta os boxes da table
table.addEventListener('click', function clickTable(event) {
  let selected = document.getElementsByClassName('selected');
  if (event.target.className == 'pixel') {
    event.target.style.backgroundColor = selected[0].style.backgroundColor;
    event.target.className = 'pixel';
  }
});

//limpa os boxes da table
clear.addEventListener('click', function () {
  let boxes = document.getElementsByClassName('pixel');

  for (index = 0; index < boxes.length; index += 1) {
    boxes[index].style.backgroundColor = 'white';
  }
});

//roda as funções quando a página é carregada
(window.onload = criateColorsPalette(boxPalette, colors), firstSelectedColor(boxPalette), populaTable())
