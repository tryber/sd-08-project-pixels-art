let pixel=document.querySelectorAll('.pixel');
function backgroundWhite(){
    pixel.style.backgroundColor='white';
}
window.onload=backgroundWhite;

let corSelecionada = document.querySelectorAll('.color');

for (let i = 0; i < corSelecionada.length; i += 1) {
  let atual = corSelecionada[i];
  atual.addEventListener('click', function (event) {
    for (let j = 0; j < corSelecionada.length; j += 1) {
      let marcado = corSelecionada[j];
      if (marcado.classList.contains('selected')) {
        marcado.classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}