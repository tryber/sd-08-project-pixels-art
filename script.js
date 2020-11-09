//Pagina inicia com a cor black selecionada
const corIni = document.querySelectorAll('.color');
corIni[0].classList.add('selected');

//Add listener para paleta de cores
const paleta = document.getElementById('color-palette');
paleta.addEventListener('click', setColor);

//Remove seletor
function selectionRem() {
    for (let index = 0; index < corIni.length; index += 1) {
      corIni[index].className = "color";
    }
}

//Adiciona seletor
function setColor(event) {
    selectionRem();
    event.target.className = "color selected";
}
