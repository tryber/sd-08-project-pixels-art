function firstBlack(){
    let element = document.getElementById('black')
    element.className = 'color selected'
}
firstBlack()

function selecionaCor(){
    let elemento = document.getElementsByClassName('color')
    for (i = 0; i < elemento.length; i += 1){
        let corSelecionada = elemento[i]
        corSelecionada.addEventListener('click', function(){
            let elemento2 = document.querySelector('.selected')
            if(corSelecionada.className === 'color'){
                corSelecionada.className = 'color selected'
                elemento2.className = 'color'
            }
        })
    }
}
selecionaCor()

function colorindoPixels(){
    let pixel = document.querySelectorAll('.pixel')
    for(i = 0; i < pixel.length; i += 1){
        let pick = pixel[i]
        pick.addEventListener('click', function(){
            let selected = document.querySelector('.selected').id
            if(pick.style.backgroundColor !== null)
            pick.style.backgroundColor = selected
        })
    }   
}
colorindoPixels()