function quadro() {
  let quadro = document.getElementById('pixel-board');
  for (let i = 1; i <= 5; i += 1) {
    let linha = document.createElement('div');
    quadro.appendChild(linha);
    for (let j = 1; j <= 5; j += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
  }
}
quadro();

function seleciona() {
  let ListaCores = document.getElementsByClassName('color');
  for (let i = 0; i < ListaCores.length; i += 1) {
    ListaCores[i].addEventListener('click', troca);
    function troca(evento) {
      for (let i = 0; i < ListaCores.length; i += 1) {
        ListaCores[i].className = 'color';
        evento.target.className = 'color selected';
      }
    }
  }
}
seleciona();

function colore() {
  let ListaPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < ListaPixels.length; i += 1) {
    ListaPixels[i].addEventListener('click', pinta);
    function pinta(evento) {
      let ListaCores = document.getElementsByClassName('selected');
      let estilo = window.getComputedStyle(ListaCores[0]);
      evento.target.style.backgroundColor = estilo.backgroundColor;
    }
  }
}
colore();

let limpa = document.getElementById('clear-board');
limpa.addEventListener('click', limpaTudo);
function limpaTudo() {
  let pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
//getElementsByClassName('pixel'); 