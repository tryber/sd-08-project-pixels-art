let colors = ["black"]
// document.getElementsByClassName("color")
function getRandom(max)
{
    return Math.floor(Math.random() * max + 1);
}

function colorsRGB()
{
    for(let i = 1; i < 4; i += 1)
    {
        colors[i] = "rgb(" + getRandom(255) + "," + getRandom(255) + "," + getRandom(255) + ")";
    }
}
colorsRGB();

// adiciona color-palette
function createElements(nome)
{
    let div = document.createElement("div");
    div.className="color";
    if(nome === "black")
        div.className = "color selected";
    document.getElementById("color-palette").appendChild(div);
    div.style.backgroundColor = nome;
}

for(let c = 0; c < 4; c += 1)
{
    createElements(colors[c]);
}

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

function clickPixel()
{
    for(let p of findPixel)
    {

        p.addEventListener("click", function()
        {
            let para = document.getElementsByClassName('selected')[0];
            let compStyles = window.getComputedStyle(para);
            this.style.backgroundColor = compStyles.getPropertyValue('background-color');
        })
    }
}

clickPixel();
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
    clickPixel();

})






















// https://www.freecodecamp.org/news/javascript-math-random-method-explained/
// https://cibersistemas.pt/tecnologia/como-usar-javascript-math-random-como-gerador-de-numeros-aleatorios/#:~:text=random()%20m%C3%A9todo%20para%20criar,%2B%201))%20%2B%20min%3B%20%7D%3B
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// https://www.youtube.com/watch?v=kmW857my2fo
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_button_value
// https://www.w3schools.com/tags/tag_input.asp