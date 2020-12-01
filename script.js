const colors = document.getElementsByClassName('color');
 for (let index = 0; index < colors.length; index += 1) {
     const item = colors[index];
     item.addEventListener('click', function(event){
        const selected = document.querySelector('.selected');
        selected.className = 'color';
        event.target.className = 'color selected'; 
     })
 }