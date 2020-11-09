//Função para definir a cor selecionada e atribuir a classe 'color' para a que tinha a classe 'selected'.
function selecionado (botaoSelecionado) {
  let antigoSelecionado = document.querySelector('.selected');
  antigoSelecionado.classList.toggle('selected');
  
  botaoSelecionado.target.classList.add('selected');
}



//Criando quadrados modelo de cores para paleta.
let paletaDeCor = document.getElementById('color-palette');
let arrayDeCores = ['green', 'yellow', 'blue'];

for (let index = 0; index < 4; index += 1) {
  let corDaPaleta = document.createElement('div');
  corDaPaleta.className = ('color');
  corDaPaleta.style.display = ('flex');
  corDaPaleta.style.border = ('solid');
  corDaPaleta.style.borderWidth = ('1px');
  corDaPaleta.style.borderColor = ('black');
  if (index == 0){
    corDaPaleta.style.backgroundColor = ('black');
    corDaPaleta.className = ('color');
    corDaPaleta.className += (' selected');
  } else {
    corDaPaleta.style.backgroundColor = (arrayDeCores[index - 1]);
  } 
  corDaPaleta.style.width = ('40px');
  corDaPaleta.style.height = ('40px');
  corDaPaleta.style.margin = ('5px');
  corDaPaleta.addEventListener('click', selecionado);
  paletaDeCor.appendChild(corDaPaleta);
}

//Criando mosaico com as células a serem pintadas.
let gradeCelulas = document.getElementById('pixel-board');
gradeCelulas.style.borderSpacing = (0);
gradeCelulas.style.border = ('none');

for (let primeiroIndex = 0; primeiroIndex < 5; primeiroIndex += 1) {
  let linhaDaTabela = document.createElement('tr');
  for (let segundoIndex = 0; segundoIndex < 5; segundoIndex += 1) {
    let celulaLinhaTabela = document.createElement('td');
    celulaLinhaTabela.className = ('pixel');
    celulaLinhaTabela.style.backgroundColor = ('white');
    celulaLinhaTabela.style.border = ('solid');
    celulaLinhaTabela.style.borderWidth = ('1px');
    celulaLinhaTabela.style.width = ('40px');
    celulaLinhaTabela.style.height = ('40px');
    linhaDaTabela.appendChild(celulaLinhaTabela);
  }
  gradeCelulas.appendChild(linhaDaTabela);
}

