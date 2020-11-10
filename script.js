const repeat = (what, times) => {
    for (let index = 0; index < times; index++) what();
}

const createPixel = () => {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    return pixel;
}

const createPixelRow = () => {
    let row = document.createElement('div');
    row.className = 'pixel-row';
    repeat(() => {
        let pixel = createPixel();
        row.appendChild(pixel);
    }, 5);
    return row;
}

const createPixelGrid = () => {
    let grid = document.querySelector('#pixel-board');
    repeat(() => {
        let row = createPixelRow();
        grid.appendChild(row);
    }, 5);
}

createPixelGrid();
