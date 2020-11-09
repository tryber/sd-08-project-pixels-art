window.onload = function(){
    function setBackgroundColor(color){
        let thisBackgroundColor = document.querySelector(".color");
        for(index = 0; thisBackgroundColor.length > index ; index+=1){
            thisBackgroundColor[index].style.backgroundColor = color[index];
            localStorage.setItem("backgroundColor", color[index]);
        }
        colors = ['black, blue, green, purple'];
    }
    setBackgroundColor(colors);
}