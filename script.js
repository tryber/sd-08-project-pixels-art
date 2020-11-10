// criar 5 tr's e 5 td's em cada TR

function creatingLinesAndCells() {
    const table = document.getElementById('pixel-board');
    for (let i = 0; i < 5; i += 1) {
        const line = document.createElement('div');
        line.className = "linha";
        table.appendChild(line);

        for (let j = 0; j < 5; j += 1) {
            const cell = document.createElement('div');
            line.appendChild(cell);
            cell.className = "pixel";
        }

    }
}

creatingLinesAndCells();