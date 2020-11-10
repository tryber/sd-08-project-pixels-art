// Req 7
const corSelecionada = document.querySelectorAll('.color');

for (let i = 0; i < corSelecionada.length; i += 1) {
  const atual = corSelecionada[i];
  atual.addEventListener('click', function (event) {
    for (let j = 0; j < corSelecionada.length; j += 1) {
      const marcado = corSelecionada[j];
      if (marcado.classList.contains('selected')) {
        marcado.classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}

// Req 8
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    const cor = document.querySelector('.selected');
    const pickedColor = window.getComputedStyle(cor, null).getPropertyValue("background-color");
    event.target.style.backgroundColor = pickedColor;
  }
});

// Req 9

const button = document.querySelector('#clear-board');

button.addEventListener('click', function () {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].removeAttribute('style');
  }
});
