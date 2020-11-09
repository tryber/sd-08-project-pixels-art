const pixel = document.querySelector('#pixel-board');
for (let coluna = 0; coluna < 5; coluna += 1) {
  for (let linha = 0; linha < 5; linha += 1) {
    let a = document.createElement('div');
    a.className = 'pixel';
    a.style.backgroundColor = '#fff';
    a.style.width = '40px'
    a.style.height = '40px'
    a.style.marginBottom = '10px'
    a.style.border = '1px solid black'
    pixel.appendChild(a);
  }    
}