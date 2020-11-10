let repeat = (what, times) => {
    for (let index = 0; index < times; index++) what();
}

let createPixel = () => {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    return pixel;
}

let createPixelRow = () => {
    let row = document.createElement('div');
    row.className = 'pixel-row';
    repeat(() => {
        let pixel = createPixel();
        row.appendChild(pixel);
    }, 5);
    return row;
}

let createPixelGrid = () => {
    let grid = document.querySelector('#pixel-board');
    repeat(() => {
        let row = createPixelRow();
        grid.appendChild(row);
    }, 5);
}

createPixelGrid();
