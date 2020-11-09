let color = ['black',corXablau(),corXablau(),corXablau()];
let palet = document.querySelectorAll('.color');
let colorPixel = document.querySelectorAll('.pixel');
let clear = document.querySelector('#clear-board');
let paintingAmount = document.querySelector('#generate-board')


function corXablau(){
    let xablau = `0123456789ABCDEF`;
    let meDePapai = `#`
    for (var a = 0; a < 6; a++){
        meDePapai += xablau [Math.floor(Math.random()*16)];
    }
    return meDePapai;
}
corXablau()


for(let a = 0; a < color.length; a+=1){
    palet[a].style.backgroundColor = color[a];
    palet[a].addEventListener('click', function(){
        let selected = document.getElementsByClassName('selected');
        selected[0].classList.remove('selected');
        let clickColor = palet[a].style.backgroundColor;
        sessionStorage.setItem('Escolha', clickColor);
        palet[a].classList.add('selected');
    })
}

for(let a = 0; a < colorPixel.length; a+=1){
    colorPixel[a].addEventListener('click',function(){
        colorPixel[a].style.backgroundColor = sessionStorage.getItem('Escolha')
    })
}

clear.addEventListener('click', function(){
    for(let a = 0; a < colorPixel.length; a+=1){
        colorPixel[a].style.backgroundColor = 'white'
    }
})

paintingAmount.addEventListener('click', function(){
    let number = document.querySelector('#board-size').value;
    document.querySelectorAll('.linha').forEach(e => e.remove());
    if(number<5){
        number = 5;
    }
    else if(number > 50){
        number = 50;
    }
    for(let a = 0;a < number; a++){
        let createDiv = document.createElement('div');
        createDiv.className = "linha";
        document.querySelector('#pixel-board').append(createDiv);
        for (let b = 0; b < number; b++){
            let createDiv2 = document.createElement('div');
            createDiv2.className = 'pixel';
            createDiv2.addEventListener('click', function(){
                createDiv2.style.backgroundColor = sessionStorage.getItem('Escolha');
            })
            document.getElementsByClassName('linha')[a].appendChild(createDiv2)
        }
    }
})