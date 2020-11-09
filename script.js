window.onload = function () {
 let classColorSelect = document.querySelector('.color');
 classColorSelect.className = 'color selected';   
    
}
    

    let colorAvaliable = ['black', 'red', 'green', 'blue'];
    
 
    function setColors() {
        let colorPallete = document.querySelectorAll('.color');
        for (let index = 0; index < colorPallete.length; index+= 1) {
            
            colorPallete[index].style.backgroundColor = colorAvaliable[index];
        }
    }
    setColors();

    function setClassColor() {
        let colorPallete = document.querySelectorAll('.color');
        for (let index = 0; index < colorPallete.length; index+= 1) {
            colorPallete[index].addEventListener('click', function(changeClass) {
                let classInSelected = document.querySelector('.color.selected');
                classInSelected.className = 'color';
                changeClass.target.className = 'color selected';
              })
        }
    }
    setClassColor();
     
        
        