//Requisito 2
// function criacao() {
// const paiDiv = document.getElementById('color-palette');
// const cores = ["black", "red", "blue", "green"];

// for (let index = 0; index < 4; index += 1) {
//     let filhaDiv = document.createElement("div");
//     paiDiv.appendChild(filhaDiv);
//     filhaDiv.className = "color";
//     colorDiv = cores[index];
//     filhaDiv.style.backgroundColor = colorDiv;
//     }
// }
// criacao();


//Cores aleatoriamente
const first = document.querySelector("#black")
first.style.backgroundColor = "black";
const second = document.querySelector("#red");
const third = document.querySelector("#blue");
const fourth = document.querySelector("#green");

function corAleatoria() {
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
  }
function aleatorias() {
    second.style.backgroundColor = corAleatoria();
    third.style.backgroundColor = corAleatoria();
    fourth.style.backgroundColor = corAleatoria();
}
aleatorias();

//requisito 6
//document.querySelector('color').classList.add("selected");

//Requisito 6
function classePreto() {
    const selectCor = document.querySelector(".color");
    selectCor.classList.add("selected");
}
classePreto();

//Requisito 7
function MudaSelect() {
    const array = document.querySelectorAll(".color");
    for (let index = 0; index < array.length; index += 1) {
        const item = array[index];
        item.addEventListener("click", (event) => {
            const nome = document.querySelector(".selected");
            if (item.className === "color") {
                nome.classList.remove("selected");
                event.target.classList.add("selected");
            }
        })
        
    }

}
MudaSelect();

//Requisito 8
function mudaCor() {
    const tabela = document.getElementById("pixel-board");
    tabela.addEventListener("click", function(event) {
        const colorSlt = document.querySelector(".selected")
        if (colorSlt !== "null") {
            event.target.style.backgroundColor = colorSlt.style.backgroundColor;
        }
    })
}
mudaCor();


//Requisito 9
function limpar() {
    const botao = document.getElementById("clear-board");
    const tabela = document.getElementsByClassName("pixel");
    botao.addEventListener("click", function(){
        for (let index = 0; index < tabela.length; index += 1) {
              tabela[index].style.backgroundColor = "white";
        }
        
    })
}
limpar();