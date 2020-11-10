// paleta de cores
const endere = document.getElementById('color-palette');
const Cores = ['black', 'blue', 'green', 'red'];
for (let itens = 0; itens < Cores.length; itens += 1) {
  let color = document.createElement('div');
  color.className = 'color';
  color.style.background = Cores[itens];
  color.style.display = 'inline-block';
  color.style.width = '100px';
  color.style.border = 'solid 1px';
  endere.appendChild(color);
  const text = document.createElement('p');
  text.innerHTML = Cores[itens];
  text.style.textAlign = 'center';
  text.style.color = '#fff';
  color.appendChild(text);
}
//botão para limpar quadro
let btn = document.createElement('button');
let endrebtn = document.getElementById('btn')
btn.id = 'clear-board';
btn.innerText = 'Limpar';
btn.style.width = '200px';
btn.style.height = '40px';
btn.style.marginLeft = '100px';
endrebtn.appendChild(btn);
// evento botão
//document.getElementById('clear-board').addEventListener('click', limpa);
//function limpa() {
  ///document.getElementsByClassName('pixel-board').background-color ='white';
//};

//quadro de pixels
const quadroDePixels = document.getElementById('pixel-board');
quadroDePixels.style.width = '400px';
quadroDePixels.style.height = '400px';
quadroDePixels.style.textAlign = 'center';
for (let altura = 0; altura < 5; altura += 1) {
  let quebraDeLinha = document.createElement('br');
  for (let comprimento = 0; comprimento < 5; comprimento += 1) {
    var pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.background = 'white';
    pixel.style.border = 'solid black 1px';
    pixel.style.display = 'inline-block';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    quadroDePixels.appendChild(pixel);
  }
  quadroDePixels.appendChild(quebraDeLinha);
}
document.querySelector('.color').classList.add('selected')
const reset = () => {
  for (let item in seletorDeCores) {
    seletorDeCores[item].className = 'color';
  }
};
document.querySelector('.color').classList.add('selected');
let seletorDeCores = endere.querySelectorAll('div');
for (
  let coresDaPaleta = 0;
  coresDaPaleta < seletorDeCores.length;
  coresDaPaleta += 1
) {
  seletorDeCores[coresDaPaleta].addEventListener('click', () => {
    reset();
    seletorDeCores[coresDaPaleta].classList.add('selected');
  });
}
let aquarela = quadroDePixels.querySelectorAll('.pixel');
for (let pixel = 0; pixel < aquarela.length; pixel += 1) {
    aquarela[pixel].addEventListener('click', () => {
      let cor = document.querySelector('.selected').style.background;
      aquarela[pixel].style.background = cor;
    });
  }
