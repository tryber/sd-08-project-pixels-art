
function iniciar() {
        
    
   let colorDef = document.getElementsByClassName('color');

    for(let index = 0; index < colorDef.length; index += 1){
        switch (index){
            case '0':
                colorDef[index].style = "background-color: black;";
                break;
            case '1':
                colorDef[index].style = "background-color: red;";
                break;
            case '2':
               colorDef[index].style = "background-color: green;";
               break;
            case '3':
                colorDef[index].style = "background-color: yellow;";
                break;
            }

    }
}
iniciar();
