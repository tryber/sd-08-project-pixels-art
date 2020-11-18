let black =  document.getElementById('black')
let green =  document.getElementById('green')
let red =  document.getElementById('red')
let blue =  document.getElementById('blue')

function AdcCor(n){
    
    if(black.classList.contains('selected')){
        let pixel = document.getElementById(n)

        //excluindo cores anteriores
        if(pixel.classList.contains('blue')){
            pixel.classList.remove('blue')
        }
        if(pixel.classList.contains('red')){
            pixel.classList.remove('red')
        }
        if(pixel.classList.contains('green')){
            pixel.classList.remove('green')
        }
        //excluindo cores anteriores

        pixel.classList.add('black')

    }

    else if(green.classList.contains('selected')){
        let pixel = document.getElementById(n)

        //excluindo cores anteriores
        if(pixel.classList.contains('blue')){
            pixel.classList.remove('blue')
        }
        if(pixel.classList.contains('red')){
            pixel.classList.remove('red')
        }
        if(pixel.classList.contains('black')){
            pixel.classList.remove('black')
        }
        //excluindo cores anteriores

        pixel.classList.add('green')
    }

    else if(red.classList.contains('selected')){
        let pixel = document.getElementById(n)

        //excluindo cores anteriores
        if(pixel.classList.contains('blue')){
            pixel.classList.remove('blue')
        }
        if(pixel.classList.contains('black')){
            pixel.classList.remove('black')
        }
        if(pixel.classList.contains('green')){
            pixel.classList.remove('green')
        }
        //excluindo cores anteriores

        pixel.classList.add('red')
    }

    else{
        let pixel = document.getElementById(n)

        //excluindo cores anteriores
        if(pixel.classList.contains('black')){
            pixel.classList.remove('black')
        }
        if(pixel.classList.contains('red')){
            pixel.classList.remove('red')
        }
        if(pixel.classList.contains('green')){
            pixel.classList.remove('green')
        }
        //excluindo cores anteriores

        pixel.classList.add('blue')
    }
}

function trocaSelected(cor){
    if(black.classList.contains('selected')){
        black.classList.remove('selected')
    }

    if(green.classList.contains('selected')){
        green.classList.remove('selected')
    }

    if(red.classList.contains('selected')){
        red.classList.remove('selected')
    }

    if(blue.classList.contains('selected')){
        blue.classList.remove('selected')
    }
    //testes para retirar os selected, feito.

    if (cor == 'black'){
        black.classList.add('selected')
    }

    if (cor == 'green'){
        green.classList.add('selected')
    }

    if (cor == 'blue'){
        blue.classList.add('selected')
    }

    if (cor == 'red'){
        red.classList.add('selected')
    }
}

