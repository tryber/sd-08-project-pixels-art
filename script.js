function eventsColor(event) {
    const colorClass = document.querySelectorAll('.selected');
    colorClass.classList.remove('selected');
    event.target.classList.add('selected');

    
}
let verde = document.getElementById('green');
verde.addEventListener('click', eventsColor);

let azul = document.getElementById('blue');
azul.addEventListener('click', eventsColor);

let vermelho = document.getElementById('red');
vermelho.addEventListener('click', eventsColor);

let preto = document.getElementById('black');
preto.addEventListener('click', eventsColor);


