const pixel = document.querySelector('#pixel-board');
for (let col = 0; col < 5; col += 1) {
    for (let line = 0; line < 5; line += 1) {
        const pix = document.createElement('div');
        pix.className = 'pixel';
        pixel.appendChild(pix);
    }
}
window.onload = function () {
    document.getElementById('black').classList.add('selected')
    addEventListener("click", function (event) {
        if (event.target.className == "color") {
            for (let index = 0; index < color.length; index += 1) {
            color[index].className = "color";
            }
            event.target.className = "color selected";
        }
    });
    addEventListener('click', function (event) {
        for (let index = 0; index < color.length; index += 1) {
            if (color[index].className == 'color selected' && event.target.className == 'pixel') {
                event.target.style.backgroundColor = getComputedStyle(color[index]).backgroundColor;
            }
        }
    });
}

function limpar(){
    document.getElementById('pixel').style.backgroundColor = 'white';
}
limpar();
