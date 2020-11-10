let selecionado = document.querySelectorAll(".color");

for (let i = 0; i < selecionado.length; i += 1) {
    let atual = selecionado[i];
    atual.addEventListener('click', function (event) {
        for (let j = 0; j < selecionado.length; j += 1) {
            let marcado = selecionado[j];
            if (marcado.classList.contains('selected')) {
                marcado.classList.remove('selected');
            }
        }
        event.target.classList.add('selected');
    })
}

