

// adiciona color-palette
function createElements(nome)
{
    let div = document.createElement("div");
    div.className="color";
    if(nome === "black")
        div.className = "color selected"
    document.getElementById("color-palette").appendChild(div);
    div.id = nome;
    div.style.backgroundColor = nome;
}
createElements("black");
createElements("red");
createElements("blue");
createElements("green");


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

// colorir quadro clicado
let findPixel = document.getElementsByClassName("pixel");

for(let p of findPixel)
{

    p.addEventListener("click", function()
    {
        let para = document.getElementsByClassName('selected')[0];
        let compStyles = window.getComputedStyle(para);
        this.style.backgroundColor = compStyles.getPropertyValue('background-color');
    })
}

// clear button
document.getElementById("clear-board").addEventListener("click", function()
{
    for(let p of findPixel)
    {
        p.style.backgroundColor = "white";
    }
})

























//https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// https://www.youtube.com/watch?v=kmW857my2fo
