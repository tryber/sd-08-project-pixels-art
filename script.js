function colorsOptions() {
    let options = document.getElementById('color-palette');
    let colors = [];
    for (let i = 0; i < 4; i += 1) {
        colors[i] = document.createElement('ul');
        colors[i].classList.add('color');
        colors[i].style.backgroundColor = randomColor();
        options.appendChild(colors[i]);
    }
    console.log(colors);
};
colorsOptions();

function randomColor() {
    let c1 = Math.floor(Math.random() * 255);
    let c2 = Math.floor(Math.random() * 255);
    let c3 = Math.floor(Math.random() * 255);
    return 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')';
}