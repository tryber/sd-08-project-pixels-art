function firstBlack(){
    let element = document.getElementById('black')
    element.className = 'color selected'
}
firstBlack()

function selecionaCor(){
    let elemento = document.getElementsByClassName('color')
    let elemento2 = document.querySelector('.selected')
    for (i = 0; i < elemento.length; i += 1){
        let corSelecionada = elemento[i]
        corSelecionada.addEventListener('click', function(){
            let elemento2 = document.querySelector('.selected')
            if(corSelecionada.className === 'color'){
                corSelecionada.className = 'color selected'
                elemento2.className = 'color'
            }else{
                corSelecionada.className = 'color'
                
            }
        })
    }
}
selecionaCor()