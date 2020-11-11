window.onlad = function() {
    tableCreation(5);
}

// Table creation
function tableCreation(size) {
    let table = document.querySelector('#pixel-board');
    for (let i = 0; i < size; i += 1) {
        let tr = document.createElement('div');
        tr.className = "tr"
        for (let j = 0; j < size; j += 1) {
            let td = document.createElement('div');
            td.className = 'pixel tr';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
