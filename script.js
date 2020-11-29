//requisito 8
function cliquePreto () {
  document.getElementById('color2').classList.remove('selected');
  document.getElementById('color3').classList.remove('selected');
  document.getElementById('color4').classList.remove('selected');
  document.getElementById('color1').classList.add('selected');
};

function cliqueVermelho () {
  document.getElementById('color1').classList.remove('selected');
  document.getElementById('color3').classList.remove('selected');
  document.getElementById('color4').classList.remove('selected');
  document.getElementById('color2').classList.add('selected');
};

function cliqueAzul () {
  document.getElementById('color1').classList.remove('selected');
  document.getElementById('color2').classList.remove('selected');
  document.getElementById('color4').classList.remove('selected');
  document.getElementById('color3').classList.add('selected');
};

function cliqueRosa () {
  document.getElementById('color1').classList.remove('selected');
  document.getElementById('color2').classList.remove('selected');
  document.getElementById('color3').classList.remove('selected');
  document.getElementById('color4').classList.add('selected');
};

//requisito 7


//requisito 9
let button = document.querySelector('#clear-board');
button.addEventListener('click', botao);

function botao() {
  let cleanBoard = document.getElementsByClassName('pixel');

  for (let index = 0; index < cleanBoard.length; index++) {
    cleanBoard[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
