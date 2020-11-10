const repeat = (what, times) => {
    for (let index = 0; index < times; index++) what();
}

const createPixel = () => {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
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

createPixelGrid(5, 5);
