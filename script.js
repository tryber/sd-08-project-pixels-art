window.onload = () => {
    document.getElementsByClassName('color')[0].classList.add('selected');
};




let selectedColor = document.getElementsByClassName('color');

for(let x of selectedColor){
    x.addEventListener('click', (event) => {
        let selectColor = document.querySelector('.selected');
        if(event.target.classList.contains('selected') == false){
            selectColor.classList.remove('selected');
            x.classList.add('selected');
        }
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