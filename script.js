window.onload = () => {
    document.getElementsByClassName('color')[0].classList.add('selected');
};

let selectedColor = document.getElementsByClassName('color');
for(let x of selectedColor){
    x.addEventListener('click', (event) => {
        let selectColor = document.querySelector('.selected');
        if(x.classList.contains('selected') == false){
            // Ref element.classList -> https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
            selectColor.classList.remove('selected');
            x.classList.add('selected');
        }
    })
}


let pixels = document.getElementsByClassName('pixel');

for(let x of pixels){
    x.addEventListener('click', (pixelSelected) => {
        let color = document.querySelector('.selected');
        color = window.getComputedStyle(color,null);
        // Ref window.getComputedStyle() -> https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        pixelSelected.target.style.backgroundColor = color.backgroundColor;
        console.log(pixelSelected.target);
    })
}

let clearButton = document.querySelector('#clear-board');

clearButton.addEventListener('click', () => {
    let pixels = document.getElementsByClassName('pixel');
    for(let x of pixels){
        x.style.backgroundColor = 'white';
    }
});


let generateBoard = document.querySelector('#generate-board');
let valueField = document.querySelector('#board-size');



generateBoard.addEventListener('click', () =>{
    if(Number(valueField.value) >=  5 && Number(valueField.value) <= 50){
        createPixel(Number(valueField.value));
    }

    valueField.value = '';
})


function createPixel(value) {
    
    
    for(let x = 0 ; x < value; x += 1){
        const pixelRow = document.createElement('tr');
        document.querySelector('#pixel-board').appendChild(pixelRow);
        pixelRow.className = `rowNumber${x}`;
        for(let y = 0; y < value; y += 1){
            const pixelColumn = document.createElement('td');
            document.querySelector(`.rowNumber${x}`).appendChild(pixelColumn);
            pixelColumn.className = 'pixel';
        }
        
    }
}




// sColor.addEventListener('click', function() {
//     let selectedColor = document.querySelector('.selected');
//     selectedColor.classList.remove('selected');
//     sColor.classList.add('selected');
//     console.log(sColor);
// } );
// tColor.addEventListener('click', function() {
//     let selectedColor = document.querySelector('.selected');
//     selectedColor.classList.remove('selected');
//     tColor.classList.add('selected');
//     console.log(tColor);
// } );
// fColor.addEventListener('click', function() {
//     let selectedColor = document.querySelector('.selected');
//     selectedColor.classList.remove('selected');
//     fColor.classList.add('selected');
//     console.log(fColor);
// } );