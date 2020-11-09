let colors = document.body.getElementsByClassName("color"); //Seleciona os elementos com a classe color e coloca na variável
let pixels = document.body.querySelectorAll("#pixel"); //Seleciona os elementos com a id pixel e coloca na variável


for (let i = 0; i < colors.length; i+=1){ // Esse loop percorre as cores da paleta de cores.
    let color = colors[i]; // Definirá a cor que será clicada no array de cores e adicionará a variável selected
    let selectedColors = document.body.getElementsByClassName('color selected'); // Variável usada para modificar a cor que estava previamente selecionada
    
    color.addEventListener('click', function(event){ //Adiciona-se um escutador de evento para providenciar a troca da classe selected
        let newColor = event.target;

        

        for (let i = 0; i < selectedColors.length; i+=1){ //Loop interno para acessar as cores e encontrar a que estava selecionada previamente
            let selectedColor = selectedColors[i];
            if(selectedColor){selectedColor.classList.toggle('selected')}
        }
        newColor.classList.toggle('selected');
    })
}

for (let i = 0; i < pixels.length; i+=1){
    let pixel = pixels[i];
    pixel.addEventListener('click', function(event){
        if(pixel.style.backgroundColor == 'white'){
            pixel.style.backgroundColor = selectedColor.style.backgroundColor
        }else{
            pixel.style.backgroundColor == 'white'
        }
    })
}