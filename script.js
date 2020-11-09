let paletaDeCor = document.getElementById('color-palette');
let arrayDeCores = ['green', 'yellow', 'blue'];

for (let index = 0; index < 4; index += 1){
  let corDaPaleta = document.createElement('div');
  corDaPaleta.className = ('color');
  corDaPaleta.style.display = ('flex');
  corDaPaleta.style.border = ('solid');
  corDaPaleta.style.borderWidth = ('1px');
  corDaPaleta.style.borderColor = ('black');
  if (index == 0){
    corDaPaleta.style.backgroundColor = ('black');
  } else {
    corDaPaleta.style.backgroundColor = (arrayDeCores[index - 1]);
  } 
  corDaPaleta.style.width = ('40px');
  corDaPaleta.style.height = ('40px');
  corDaPaleta.style.margin = ('5px');
  paletaDeCor.appendChild(corDaPaleta);

}

