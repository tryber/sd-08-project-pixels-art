// Criando divs para as paletas.
const fragment1 = document.createDocumentFragment();
for (let index = 0; index < 4; index += 1) {
    const divPaleta = document.createElement('div');
    divPaleta.setAttribute('class', 'color');
    fragment1.appendChild(divPaleta);
}
// Selecionando origem e inserindo divs paletas
const container1 = document.getElementById('color-palette');
container1.appendChild(fragment1); 

// Alterando a cor da paleta 01
function cor01 () {
    const cor01 = document.getElementsByClassName('color')[0].style;
    cor01['backgroundColor'] = 'black';
}

cor01();

//Inserindo nova classe ao primeiro elemento
const insertClass = document.querySelectorAll('.color');
insertClass[0].classList.add('selected');

// Alterando a cor da paleta 02
function cor02 () {
    const cor02 = document.getElementsByClassName('color')[1].style;
    cor02['backgroundColor'] = '#735236'
}

cor02();
// Alterando a cor da paleta 03
function cor03 () {
    const cor03 = document.getElementsByClassName('color')[2].style;
    cor03['backgroundColor'] = '#D9A384'
}

cor03();

// Alterando a cor da paleta 04
function cor04 () {
    const cor04 = document.getElementsByClassName('color')[3].style;
    cor04['backgroundColor'] = '#D94A4A'
}

cor04();

// Criando divs(pixels individuais) com atributo.
const fragment2 = document.createDocumentFragment();
for (let index = 0; index <= 24; index += 1) {
    const divGrid = document.createElement('div');
    divGrid.setAttribute('class', 'pixel');
    fragment2.appendChild(divGrid);
}

// Selecionando origem e inserindo fragmento
const container2 = document.querySelector('#pixel-board');
container2.appendChild(fragment2);

// Adicionando e removendo classe selected
document.getElementById('color-palette').addEventListener('click', e => {
    if(e.target.classList.contains('color')) {
        document.querySelectorAll('.color').forEach((Element) => {
            Element.classList.remove('selected');
        });
        e.target.classList.add('selected');
    }
})

//Pintando os pixels
document.getElementById('pixel-board').addEventListener('click', e => {
    if(e.target.classList.contains('pixel')) {
        e.target.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    }
})

document.getElementById('souPai').addEventListener('click', e => {
    console.log('oi pai, tô aqui');
    if(e.target.classList.contains('azul')) {
        event.target.style.backgroundColor = 'red';
    }
})

