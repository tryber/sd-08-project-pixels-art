const body = document.querySelector('body');

function createElements(){
    let h1 = document.createElement('h1');
    h1.id = 'title';
    h1.innerHTML = 'Paleta de Cores';
    body.appendChild(h1);
}

createElements();

function createColorPallet(){
    let colors = ["black", "red", "blue", "green"];
    let colorPallet = document.createElement('div');
    colorPallet.id = 'color-palette';
    colorPallet.className = 'color';
    colorPallet.style.display = 'inline-block'
    body.appendChild(colorPallet);

    for(let i = 0; i < colors.length; i += 1){
        let block = document.createElement('div');
        block.style.height = '30px';
        block.style.width = '30px';
        block.style.display = 'inline-block';
        block.style.border = '1px solid black';
        block.style.backgroundColor = colors[i];
        colorPallet.appendChild(block);
    }
}

createColorPallet();