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