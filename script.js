const cores = ['black', 'red', ' blue', 'green'];
const divColorPalette = document.getElementById("color-palette");



for (let i in cores) {
  let diviCores = document.createElement('div');
  diviCores.style =`background-color:${cores[i]};`;
  diviCores.className ='color';
  divColorPalette.appendChild(diviCores);
}
