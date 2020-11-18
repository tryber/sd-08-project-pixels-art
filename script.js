
const repeat = (what, times) => {
    for (let index = 0; index < times; index++) what();
}

const generatePalette = (colors) => {
    let color_palette = document.querySelector('div#color-palette');
    for (let color of colors) {
        let color_pixel = document.createElement('div');
        color_pixel.className = 'color';
        color_pixel.id = color;
        color_pixel.style.backgroundColor = color;
        color_palette.appendChild(color_pixel);
    }
    let first_element = document.querySelector('div#color-palette').firstElementChild;
    first_element.classList.add('selected');
}

const createPixel = () => {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.onclick = () => {
        pixel.style.backgroundColor = document.querySelector('div#color-palette>.selected').style.backgroundColor;/*() => {
            Array.from(document.querySelectorAll('div#color-palette>.color')).reduce((pV, cV) => {
                if (Array.from(cV.classList).reduce((pv, cv) => {
                    if (cv == 'selected') return true;
                    else return pv;
                }, false)) return cV;
            }, undefined);
        }*/
    };
    return pixel;
}

const createPixelRow = (width) => {
    let row = document.createElement('div');
    row.className = 'pixel-row';
    repeat(() => {
        let pixel = createPixel();
        row.appendChild(pixel);
    }, width);
    return row;
}

const createPixelGrid = (height, width) => {
    let grid = document.querySelector('#pixel-board');
    repeat(() => {
        let row = createPixelRow(width);
        grid.appendChild(row);
    }, height);
}

let custom_colors = ['red', 'lime', 'blue'];
generatePalette(['black'].concat(custom_colors));
createPixelGrid(5, 5);
