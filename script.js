//adiciona quadro de 5x5 pixels
for(let i = 0; i < 5; i += 1)
{
    for(let j = 0; j < 5; j += 1)
    {
        let div = document.createElement("div");
        div.className = "pixel";
        div.style.backgroundColor = "white";

        document.getElementById("pixel-board").appendChild(div);
    }
}



// Cor selecionada do color-palette

let findColor = document.getElementsByClassName("color");
let findSelected = document.querySelector("selected");

for(let i of findColor)
{

    i.addEventListener("click", function()
    {
        for(let i of findColor)
    {
        if(i.classList.contains("selected"))
            i.classList.remove("selected")
    }
        if(!this.classList.contains("selected"))
            this.classList.add("selected");
    })
}

// colorir quadro clicado
























// https://www.youtube.com/watch?v=kmW857my2fo
