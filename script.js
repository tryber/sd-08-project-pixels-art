let black =  document.getElementById('black')
let green =  document.getElementById('green')
let red =  document.getElementById('red')
let blue =  document.getElementById('blue')

function AdcCor(n){
    
    if(black.classList.contains('selected')){
        let pixel = document.getElementById(n)
        pixel.classList.add('black')
    }

    else if(green.classList.contains('selected')){
        let pixel = document.getElementById(n)
        pixel.classList.add('green')
    }

    else if(red.classList.contains('selected')){
        let pixel = document.getElementById(n)
        pixel.classList.add('red')
    }

    else{
        let pixel = document.getElementById(n)
        pixel.classList.add('blue')
    }
}

function trocaSelected(cor){
    if(black.classList.contains('selected')){
        black.classList.remove('selected')
    }

    else if(green.classList.contains('selected')){
        green.classList.remove('selected')
    }

    else if(red.classList.contains('selected')){
        red.classList.remove('selected')
    }

    else{
        blue.classList.remove('selected')
    }
    //testes para retirar os selected, feito.

    if (cor == 'black'){
        black.classList.add('selected')
    }

    else if (cor == 'green'){
        green.classList.add('selected')
    }

    else if (cor == 'blue'){
        blue.classList.add('selected')
    }

    else{
        red.classList.add('selected')
    }
}

