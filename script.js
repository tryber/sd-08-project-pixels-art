

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
let boardSize = 5;
function generateBoard(boardSize)
{
    let pixelBoard = document.querySelector("#pixel-board");
    for(let i = 0; i < boardSize; i += 1)
    {
        let line = document.createElement("div");
        pixelBoard.appendChild(line);
        line.className = "line";
        let findLine = document.getElementsByClassName("line")[i];

        for(let j = 0; j < boardSize; j += 1)
        {
            let column = document.createElement("div");
            column.className = "pixel";
            column.style.backgroundColor = "white";

            pixelBoard.appendChild(column);
        }
    }
}
generateBoard(boardSize);

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
document.getElementById("clear-board").addEventListener("click", clearPixel)

function clearPixel()
{
    for(let p of findPixel)
    {
        p.style.backgroundColor = "white";
    }
}

function clearboard(element)
{
    while(element.firstChild)
    {
        element.removeChild(element.firstChild);
    }

}

document.getElementById("generate-board").addEventListener("click", function()
{
    var x = document.getElementById("board-size").value;

    if(x === "")
        alert("Board inválido!");
    else
    {
        if(x <= 0)
            alert("número deve ser maior do que 0!");
        else if(x < 5)
            x = 5;
        else if(x > 50)
            x = 50;
    }
    clearboard(document.getElementById("pixel-board"))
    generateBoard(x);

})
























// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// https://www.youtube.com/watch?v=kmW857my2fo
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_button_value
// https://www.w3schools.com/tags/tag_input.asp