window.onload = function () {
 let colorSelect = document.querySelector('.color');
 colorSelect.className = 'color selected';   
    
}
    

    let colorAvaliable = ['black', 'red', 'green', 'blue'];
    
 
    function setColors() {
        let colorPallete = document.querySelectorAll('.color');
        for (let index = 0; index < colorPallete.length; index++) {
            
            colorPallete[index].style.backgroundColor = colorAvaliable[index];
        }
        
    }
    setColors();


        // let firstColor = document.getElementsByClassName('color');
        
        
        