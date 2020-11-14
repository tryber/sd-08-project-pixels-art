let pixel=document.querySelectorAll('.pixel');
function backgroundWhite(){
    pixel.style.backgroundColor='white';
}
window.onload=backgroundWhite;


let findColor = document.getElementsByClassName("color");

for(let i of findColor)
{
    i.addEventListener("click", function()
    {
        for(let i of findColor)
    {
        if(i.classList.contains("selected"))
            i.classList.remove("selected");
    }
        if(!this.classList.contains("selected"))
            this.classList.add("selected");
    })
}