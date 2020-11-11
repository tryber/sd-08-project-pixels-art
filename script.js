let colors = document.body.getElementsByClassName("color"); //Seleciona os elementos com a classe color e coloca na variável
let pixels = document.body.getElementsByClassName("pixel"); //Seleciona os elementos com a id pixel e coloca na variável



for (let i = 0; i < colors.length; i+=1){ // Esse loop percorre as cores da paleta de cores.
    
    let color = colors[i]; // Definirá a cor que será clicada no array de cores e adicionará a variável selected
    let selectedColors = document.body.getElementsByClassName('color selected'); // Variável usada para modificar a cor que estava previamente selecionada
    
    color.addEventListener('click', function(event){ //Adiciona-se um escutador de evento para providenciar a troca da classe selected
        
        let newColor = event.target;

        for (let i = 0; i < selectedColors.length; i+=1){ //Loop interno para acessar as cores e encontrar a que estava selecionada previamente
            let selectedColor = selectedColors[i];
            if(selectedColor){
                selectedColor.classList.toggle('selected')} //Deseleciona a cor selecionada previamente
        }

        newColor.classList.toggle('selected'); // Seleciona uma nova cor clicada recentemente
    })
}



for (let i = 0; i < pixels.length; i+=1){  // Loop para os pixels
    let pixel = pixels[i];
    
    pixel.addEventListener('click', function(event){

        let clickedPixel = event.target;

        let selectedColor = document.body.querySelector('.selected');

            if(selectedColor.classList.contains('black')){
                clickedPixel.style.backgroundColor = 'black';
            }else if(selectedColor.classList.contains('red')){
                clickedPixel.style.backgroundColor = 'red';
            }else if(selectedColor.classList.contains('yellow')){
                clickedPixel.style.backgroundColor = 'yellow';
            }else if(selectedColor.classList.contains('blue')){
                clickedPixel.style.backgroundColor = 'blue';
            }
            })
}