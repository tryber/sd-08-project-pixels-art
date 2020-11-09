function criaPixels(){
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1){
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}
criaPixels();

function selecionaCor(){
  const cores = document.querySelectorAll('.color');  
    for (index = 0; index < cores.length; index +=1){
      cores[index].addEventListener('click', mudaClasse)
    }
    function mudaClasse(event){
      for (index = 0; index<cores.length; index+=1){
        cores[index].className = 'color';
      }
    event.target.className = 'color selected';
    }           
}
selecionaCor();