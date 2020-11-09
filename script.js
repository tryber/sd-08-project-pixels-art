window.onload = function(){
    //Escolha de cores da paleta.
    function setBackgroundColor(color){
        let setColor = document.querySelectorAll(".color")
        let colors = ['black', 'purple', 'blue', 'yellow'];
            for(let index = 0; index < setColor.length ; index+=1){
                setColor[index].style.backgroundColor = colors[index];
        }
    }
    setBackgroundColor();
}