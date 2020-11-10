function criacao() {
const paiDiv = document.getElementById('color-palette');
const cores = ["black", "red", "blue", "green"];

for (let index = 0; index < 4; index += 1) {
    let filhaDiv = document.createElement("div");
    paiDiv.appendChild(filhaDiv);
    filhaDiv.className = "color";
    colorDiv = cores[index];
    filhaDiv.style.backgroundColor = colorDiv;
    }
}
criacao();
/*
function colorDiv() {
    const cores = ["black", "red", "blue", "green"];
    const paiDiv = document.getElementById("color-palette");
    for (let index = 0; index < cores.length; index += 1) {
        let corarray = cores[index];
        const corDivs = document.createElement("div")
        corDivs.style.backgroundColor = corarray;
        paiDiv.appendChild(corDivs);
        } 
}
colorDiv();
*/





document.getElementById('black').classList.add("selected");


function mudaCor() {
    div.classList.add("selected");
}
color.addEventListener("click", mudaCor);