let alteraCor = document.querySelectorAll('.color')

for(let i = 0; i < alteraCor.length; i+=1) {
    alteraCor[i].addEventListener('click', trocaCor)
}

function trocaCor(evento) {
    let antigoSelected = document.querySelector('.selected');
    antigoSelected.classList.remove('selected');

    evento.target.classList.add('selected');
    console.log(evento.target)
}