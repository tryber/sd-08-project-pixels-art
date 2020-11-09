function criarElemento(elemento, name = '', value = '') {
    let el = document.createElement(elemento);
    if (name !== '' && value !== '') {
        el.setAttribute(name, value);
    }
    return el;
}

function createColors(nameEl, colors) {
    let getDiv = document.querySelector('#color-palette');
    for (let i = 0; i < colors.length; i += 1) {
        let newColor = criarElemento(nameEl, 'class', 'color');
        newColor.style.backgroundColor = colors[i];
        getDiv.appendChild(newColor);
    }
}

const mainFunction = () => {
    const colors = ['black', 'blue', 'red', 'yellow'];
    createColors('div', colors);
}

mainFunction();
