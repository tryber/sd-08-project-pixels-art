window.onload = criatePalette();

function criatePalette() {
    const colors = ["black", "red", "orange", "yellow"];
    const div = document.getElementsByClassName('color');
  
    for (key in colors) {
        div[key].style.backgroundColor = colors[key];
    }
}
