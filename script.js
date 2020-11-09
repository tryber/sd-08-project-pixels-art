window.onload = function () {
  let paletas = document.querySelectorAll('.color');

  function deselecionaPaletas() {
    for (let index = 0; index < paletas.length; index++) {
      if (paletas[index].classList.contains('selected')) {
        paletas[index].classList.remove('selected');
      }
    }
  }

  function selecionaPaleta(paleta) {
    deselecionaPaletas();
    paleta.target.classList.add('selected');
  }

  for (let index = 0; index < paletas.length; index++) {
    paletas[index].addEventListener('click', selecionaPaleta);
  }
};
