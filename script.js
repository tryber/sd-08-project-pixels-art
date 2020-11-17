let paletaDaCorDoContainer = document.getElementById('color-palette');
let cores = ['black', 'green', 'red', 'yellow'];
for (let corDoContainer of cores) {
    let corDaPaleta = document.createElement('div');
    corDaPaleta.className = 'color';
    corDaPaleta.style.backgroundColor = corDoContainer;
    paletaDaCorDoContainer.appendChild(corDaPaleta);
}